'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gold mb-4">Welcome to Monster v2</h1>
        <p className="text-xl text-gray-300 mb-12">Explore games, novels, and briefings</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card title="🎮 Games" description="Play exciting games and challenges">
            <Button variant="primary" size="md" onClick={() => window.location.href = '/games'}>
              Browse Games
            </Button>
          </Card>
          <Card title="📚 Novels" description="Read engaging stories and narratives">
            <Button variant="secondary" size="md" onClick={() => window.location.href = '/novels'}>
              Explore Novels
            </Button>
          </Card>
          <Card title="📋 Briefings" description="Check latest briefings and updates">
            <Button variant="danger" size="md" onClick={() => window.location.href = '/briefings'}>
              View Briefings
            </Button>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Latest Game Release" description="Check out our newest game">
              <p className="text-gray-300 mb-4">Coming soon...</p>
              <Button variant="secondary" size="sm">Learn More</Button>
            </Card>
            <Card title="New Novel Series" description="Discover our latest story">
              <p className="text-gray-300 mb-4">Coming soon...</p>
              <Button variant="secondary" size="sm">Learn More</Button>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
