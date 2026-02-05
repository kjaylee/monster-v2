'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function GamesPage() {
  const games = [
    { id: 1, title: 'Game One', description: 'An exciting adventure game' },
    { id: 2, title: 'Game Two', description: 'Challenge yourself with puzzles' },
    { id: 3, title: 'Game Three', description: 'Multiplayer action game' },
    { id: 4, title: 'Game Four', description: 'Strategy and tactics' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gold mb-4">Games</h1>
        <p className="text-xl text-gray-300 mb-12">Explore our collection of games</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Card key={game.id} title={game.title} description={game.description}>
              <Button variant="primary" size="sm" className="w-full">
                Play Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
