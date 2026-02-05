'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function BriefingsPage() {
  const briefings = [
    { id: 1, title: 'Update #1', date: '2024-01-15', category: 'Game Updates' },
    { id: 2, title: 'Update #2', date: '2024-01-10', category: 'Platform News' },
    { id: 3, title: 'Update #3', date: '2024-01-05', category: 'Community' },
    { id: 4, title: 'Update #4', date: '2024-01-01', category: 'Features' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gold mb-4">Briefings</h1>
        <p className="text-xl text-gray-300 mb-12">Latest updates and news</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {briefings.map((briefing) => (
            <Card key={briefing.id} title={briefing.title}>
              <p className="text-sm text-gray-400 mb-2">{briefing.date}</p>
              <p className="text-gold text-sm mb-4">{briefing.category}</p>
              <Button variant="danger" size="sm" className="w-full">
                Read Briefing
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
