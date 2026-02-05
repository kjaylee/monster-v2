'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface FileInfo {
  slug: string;
  name: string;
  category: 'docs' | 'specs';
  modified: string;
}

interface FileContent {
  content: string;
  filename: string;
  category: string;
  modified: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const extractText = (node: any): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node.props?.children) return extractText(node.props.children);
  return '';
};

export default function ResearchPage() {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<FileContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'docs' | 'specs'>('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const headingIdsRef = useRef<string[]>([]);
  const headingCounterRef = useRef(0);

  // Fetch file list
  useEffect(() => {
    fetch('/api/files')
      .then(res => res.json())
      .then(data => setFiles(data.files || []))
      .catch(err => console.error('Failed to load files:', err));
  }, []);

  useEffect(() => {
    headingCounterRef.current = 0;
  }, [fileContent?.content]);

  // Fetch file content
  const loadFile = async (slug: string) => {
    setLoading(true);
    setSelectedFile(slug);
    
    try {
      const res = await fetch(`/api/files/${slug}`);
      const data = await res.json();
      
      if (res.ok) {
        setFileContent(data);
      } else {
        console.error('Failed to load file:', data.error);
        setFileContent(null);
      }
    } catch (err) {
      console.error('Error loading file:', err);
      setFileContent(null);
    } finally {
      setLoading(false);
    }
  };

  // Filter files by search and category
  const filteredFiles = useMemo(() => {
    return files.filter(file => {
      const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || file.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [files, searchQuery, activeCategory]);

  // Extract TOC from markdown
  const toc = useMemo(() => {
    if (!fileContent) {
      headingIdsRef.current = [];
      return [];
    }

    const headings: TOCItem[] = [];
    const slugCounts = new Map<string, number>();
    const registry: string[] = [];

    fileContent.content.split('\n').forEach((line) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const baseSlug = slugify(text || 'heading');
        const occurrence = slugCounts.get(baseSlug) ?? 0;
        slugCounts.set(baseSlug, occurrence + 1);
        const id = occurrence === 0 ? baseSlug : `${baseSlug}-${occurrence}`;
        headings.push({ id, text, level });
        registry.push(id);
      }
    });

    headingIdsRef.current = registry;
    headingCounterRef.current = 0;

    return headings;
  }, [fileContent]);

  const headingStyles: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', string> = {
    h1: 'text-4xl md:text-5xl text-amber-100 leading-tight',
    h2: 'text-3xl md:text-4xl text-amber-200 leading-snug',
    h3: 'text-2xl md:text-3xl text-white/90 leading-snug',
    h4: 'text-xl md:text-2xl text-white/85',
    h5: 'text-lg text-white/80',
    h6: 'text-base text-white/70',
  };

  const createHeadingRenderer = (Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
    const Element = Tag;
    return ({ children, ...props }: any) => {
      const text = extractText(children).trim();
      const index = headingCounterRef.current++;
      const generatedId =
        headingIdsRef.current[index] ?? slugify(text || `heading-${index}`);
      const headingClass = headingStyles[Tag] ?? 'text-white';
      return (
        <Element
          id={generatedId}
          className={`scroll-mt-24 font-semibold tracking-tight ${headingClass}`}
          {...props}
        >
          {children}
        </Element>
      );
    };
  };

  const markdownComponents = {
    h1: createHeadingRenderer('h1'),
    h2: createHeadingRenderer('h2'),
    h3: createHeadingRenderer('h3'),
    h4: createHeadingRenderer('h4'),
    h5: createHeadingRenderer('h5'),
    h6: createHeadingRenderer('h6'),
    table: ({ className, children, ...props }: any) => (
      <div className="mb-6 overflow-x-auto rounded-2xl border border-[#4a2f1a] bg-[#03050a]/80 shadow-[0_20px_45px_rgba(0,0,0,0.65)] ring-1 ring-[#d1a758]/40">
        <table
          className={`min-w-full border-separate border-spacing-0 text-sm text-slate-100 ${className || ''}`}
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ className, ...props }: any) => (
      <th
        className={`border border-slate-800 bg-[#0b101b] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200 ${className || ''}`}
        {...props}
      />
    ),
    td: ({ className, ...props }: any) => (
      <td
        className={`border-t border-slate-800 px-4 py-3 text-sm text-slate-200 ${className || ''}`}
        {...props}
      />
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote
        className="my-6 rounded-2xl border border-amber-400/20 bg-white/5 px-6 py-4 text-lg italic text-slate-200"
        {...props}
      >
        {children}
      </blockquote>
    ),
    a: ({ className, ...props }: any) => (
      <a
        className={`text-amber-200 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${className || ''}`}
        {...props}
      />
    ),
    ul: ({ className, ...props }: any) => (
      <ul className={`space-y-2 pl-6 text-slate-200 ${className || ''}`} {...props} />
    ),
    ol: ({ className, ...props }: any) => (
      <ol className={`space-y-2 pl-6 text-slate-200 ${className || ''}`} {...props} />
    ),
    li: ({ className, ...props }: any) => (
      <li className={`leading-relaxed ${className || ''}`} {...props} />
    ),
    hr: ({ ...props }: any) => (
      <hr className="my-8 border-t border-amber-500/30 opacity-60" {...props} />
    ),
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      if (!inline && match) {
        return (
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={match[1]}
            PreTag="div"
            customStyle={{
              backgroundColor: '#02040a',
              borderRadius: '1rem',
              padding: '1rem',
              border: '1px solid rgba(212, 168, 87, 0.3)',
            }}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }

      return (
        <code
          className={`font-mono text-sm bg-white/10 px-1.5 py-0.5 rounded-lg border border-slate-700 text-amber-100 ${className || ''}`}
          {...props}
        >
          {children}
        </code>
      );
    },
  } as const;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Research Library</h1>
            <p className="text-sm text-gray-400 mt-1">
              {files.length} documents • Specs & Documentation
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
          >
            {sidebarOpen ? 'Hide' : 'Show'} Files
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'block' : 'hidden lg:block'
          } w-full lg:w-80 bg-gray-800 border-r border-gray-700 h-[calc(100vh-73px)] overflow-y-auto`}
        >
          {/* Search */}
          <div className="p-4 border-b border-gray-700">
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex border-b border-gray-700">
            {['all', 'specs', 'docs'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as typeof activeCategory)}
                className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                  activeCategory === cat
                    ? 'bg-gray-700 text-white border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-750'
                }`}
              >
                {cat.toUpperCase()}
                <span className="ml-2 text-xs text-gray-500">
                  ({files.filter(f => cat === 'all' || f.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* File List */}
          <div className="divide-y divide-gray-700">
            {filteredFiles.map((file) => (
              <button
                key={file.slug}
                onClick={() => loadFile(file.slug)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition ${
                  selectedFile === file.slug ? 'bg-gray-700' : ''
                }`}
              >
                <div className="font-medium text-sm text-white truncate">
                  {file.name.replace('.md', '')}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {file.category} • {new Date(file.modified).toLocaleDateString()}
                </div>
              </button>
            ))}
          </div>

          {filteredFiles.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No files found
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 h-[calc(100vh-73px)] overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}

          {!loading && !fileContent && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg">Select a document to view</p>
              </div>
            </div>
          )}

          {!loading && fileContent && (
            <div className="flex gap-8 bg-gradient-to-br from-[#03060c] via-[#030408] to-[#010205] px-6 pb-8 pt-4">
              {/* Document Content */}
              <div className="flex-1 px-0 py-0 max-w-4xl mx-auto space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-200">
                    {fileContent.filename.replace('.md', '')}
                  </h2>
                  <div className="text-sm text-slate-400">
                    Last modified: {new Date(fileContent.modified).toLocaleString()} •{' '}
                    Category: {fileContent.category}
                  </div>
                </div>

                <section className="rounded-3xl border border-[#4a2f1a] bg-[#020309]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                  <article className="research-markdown prose prose-invert prose-lg max-w-none space-y-6 text-slate-200">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {fileContent.content}
                    </ReactMarkdown>
                  </article>
                </section>
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <aside className="hidden xl:flex w-64 flex-col gap-4 rounded-2xl border border-[#4a2f1a] bg-[#020308]/90 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.55)] sticky top-0 h-[calc(100vh-73px)] overflow-y-auto">
                  <div>
                    <h3 className="text-xs font-semibold text-amber-200 tracking-[0.2em] uppercase mb-3">
                      On This Page
                    </h3>
                    <p className="text-sm text-slate-400">
                      {toc.length} headings
                    </p>
                  </div>
                  <nav className="space-y-3">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block rounded-xl border border-transparent bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-amber-400/60 hover:bg-[#0b0e18]"
                        style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </aside>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
