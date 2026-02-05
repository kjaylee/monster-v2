import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DOCS_DIR = process.env.DOCS_DIR || '/Volumes/workspace/docs';
const SPECS_DIR = process.env.SPECS_DIR || '/Volumes/workspace/specs';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  try {
    const { slug } = await params;
    
    if (!slug || slug.length < 2) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      );
    }

    const [category, ...filenameParts] = slug;
    const filename = filenameParts.join('/') + '.md';

    // Security: prevent directory traversal
    if (filename.includes('..') || filename.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      );
    }

    let baseDir: string;
    if (category === 'docs') {
      baseDir = DOCS_DIR;
    } else if (category === 'specs') {
      baseDir = SPECS_DIR;
    } else {
      return NextResponse.json(
        { error: 'Invalid category' },
        { status: 400 }
      );
    }

    const filePath = path.join(baseDir, filename);

    // Ensure the resolved path is within the allowed directory
    const resolvedPath = path.resolve(filePath);
    const resolvedBaseDir = path.resolve(baseDir);
    
    if (!resolvedPath.startsWith(resolvedBaseDir)) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const stats = fs.statSync(filePath);

    return NextResponse.json({
      content,
      filename: path.basename(filePath),
      category,
      modified: stats.mtime.toISOString(),
      size: stats.size,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to read file' },
      { status: 500 }
    );
  }
}
