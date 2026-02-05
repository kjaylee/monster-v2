'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function NovelsPage() {
  const novels = [
    { id: 1, title: '모험의 서사시', author: '작가 A', description: '웅대한 모험 이야기' },
    { id: 2, title: '신비한 이야기', author: '작가 B', description: '미스터리 가득한 스토리' },
    { id: 3, title: '로맨스와 드라마', author: '작가 C', description: '감정 넘치는 이야기' },
    { id: 4, title: '과학 소설의 서사', author: '작가 D', description: '미래의 세계를 그리다' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">📚 소설</h1>
        <p className="text-lg md:text-xl text-slate-400 mb-12">매력적인 이야기를 만나보세요</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {novels.map((novel) => (
            <Card 
              key={novel.id} 
              title={novel.title} 
              description={novel.description}
              variant="hover"
            >
              <p className="text-sm text-cyan-400 mb-4">저자: {novel.author}</p>
              <Button variant="primary" size="sm" className="w-full">
                지금 읽기
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
