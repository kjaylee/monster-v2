'use client';

import { useState, useEffect, useMemo } from 'react';
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

export default function ResearchPage() {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<FileContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'docs' | 'specs'>('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fetch file list
  useEffect(() => {
    fetch('/api/files')
      .then(res => res.json())
      .then(data => setFiles(data.files || []))
      .catch(err => console.error('Failed to load files:', err));
  }, []);

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
    if (!fileContent) return [];
    
    const headings: TOCItem[] = [];
    const lines = fileContent.content.split('\n');
    
    lines.forEach((line, index) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        const id = `heading-${index}`;
        headings.push({ id, text, level });
      }
    });
    
    return headings;
  }, [fileContent]);

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
            <div className="flex">
              {/* Document Content */}
              <div className="flex-1 px-8 py-6 max-w-4xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {fileContent.filename.replace('.md', '')}
                  </h2>
                  <div className="text-sm text-gray-400">
                    Last modified: {new Date(fileContent.modified).toLocaleString()} •{' '}
                    Category: {fileContent.category}
                  </div>
                </div>

                <article className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {fileContent.content}
                  </ReactMarkdown>
                </article>
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <aside className="hidden xl:block w-64 p-6 border-l border-gray-700 sticky top-0 h-[calc(100vh-73px)] overflow-y-auto">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                    On This Page
                  </h3>
                  <nav className="space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-400 hover:text-white transition"
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
