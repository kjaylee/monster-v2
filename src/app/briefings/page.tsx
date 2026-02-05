'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function BriefingsPage() {
  const briefings = [
    { id: 1, title: 'Medium 일일 트렌드 다이제스트 - 2026.02.05', date: '2026-02-05', category: 'Daily News' },
    { id: 2, title: '2026년 2월 4일 데일리 브리핑', date: '2026-02-04', category: 'Market & Tech' },
    { id: 3, title: 'Air Hockey Neon Board Polish', date: '2026-02-04', category: 'Game Updates' },
    { id: 4, title: 'Wall Ninja Neon Polish', date: '2026-02-04', category: 'Game Updates' },
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
