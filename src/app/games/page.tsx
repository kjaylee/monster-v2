'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function GamesPage() {
  const games = [
    { id: 1, title: '신나는 모험', description: '흥미로운 모험 게임' },
    { id: 2, title: '퍼즐 챌린지', description: '뇌를 자극하는 퍼즐' },
    { id: 3, title: '멀티플레이 액션', description: '친구와 함께하는 액션 게임' },
    { id: 4, title: '전략 게임', description: '전술과 전략의 매력' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">🎮 게임</h1>
        <p className="text-lg md:text-xl text-slate-400 mb-12">우리의 게임 컬렉션을 둘러보세요</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Card 
              key={game.id} 
              title={game.title} 
              description={game.description}
              variant="hover"
            >
              <Button variant="primary" size="sm" className="w-full">
                지금 플레이하기
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
