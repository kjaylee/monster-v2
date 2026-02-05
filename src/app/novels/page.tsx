'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function NovelsPage() {
  const novels = [
    { id: 1, title: 'Novel One', author: 'Author A', description: 'An epic tale of adventure' },
    { id: 2, title: 'Novel Two', author: 'Author B', description: 'A mysterious story' },
    { id: 3, title: 'Novel Three', author: 'Author C', description: 'Romance and drama' },
    { id: 4, title: 'Novel Four', author: 'Author D', description: 'Science fiction saga' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gold mb-4">Novels</h1>
        <p className="text-xl text-gray-300 mb-12">Discover engaging stories</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {novels.map((novel) => (
            <Card key={novel.id} title={novel.title} description={novel.description}>
              <p className="text-sm text-gold mb-4">by {novel.author}</p>
              <Button variant="secondary" size="sm" className="w-full">
                Read Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
