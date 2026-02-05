'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function BriefingsPage() {
  const briefings = [
    { id: 1, title: '미디엄 일일 트렌드 다이제스트 - 2026.02.05', date: '2026-02-05', category: '일일 뉴스' },
    { id: 2, title: '2026년 2월 4일 데일리 브리핑', date: '2026-02-04', category: '시장 & 기술' },
    { id: 3, title: '에어 하키 네온 보드 업데이트', date: '2026-02-04', category: '게임 업데이트' },
    { id: 4, title: '월 닌자 네온 폴리시', date: '2026-02-04', category: '게임 업데이트' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">📋 뉴스</h1>
        <p className="text-lg md:text-xl text-slate-400 mb-12">최신 소식과 업데이트를 만나보세요</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {briefings.map((briefing) => (
            <Card 
              key={briefing.id} 
              title={briefing.title}
              variant="hover"
            >
              <p className="text-sm text-slate-400 mb-2">{briefing.date}</p>
              <p className="text-cyan-400 text-sm mb-4">{briefing.category}</p>
              <Button variant="primary" size="sm" className="w-full">
                뉴스 읽기
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
