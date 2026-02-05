import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DOCS_DIR = '/Volumes/workspace/docs';
const SPECS_DIR = '/Volumes/workspace/specs';

interface FileInfo {
  slug: string;
  name: string;
  category: 'docs' | 'specs';
  modified: string;
}

function getMarkdownFiles(dirPath: string, category: 'docs' | 'specs'): FileInfo[] {
  try {
    if (!fs.existsSync(dirPath)) {
      return [];
    }

    const files = fs.readdirSync(dirPath);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        return {
          slug: `${category}/${file.replace('.md', '')}`,
          name: file,
          category,
          modified: stats.mtime.toISOString(),
        };
      })
      .sort((a, b) => b.modified.localeCompare(a.modified)); // newest first
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

export async function GET() {
  try {
    const docsFiles = getMarkdownFiles(DOCS_DIR, 'docs');
    const specsFiles = getMarkdownFiles(SPECS_DIR, 'specs');

    return NextResponse.json({
      files: [...docsFiles, ...specsFiles],
      count: docsFiles.length + specsFiles.length,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to list files' },
      { status: 500 }
    );
  }
}
