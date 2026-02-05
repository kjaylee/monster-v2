'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4">
            Welcome to <span className="text-cyan-500">Eastsea</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Discover games, novels, and briefings in a modern, curated experience
          </p>
        </section>

        {/* Main Categories */}
        <section className="py-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              title="🎮 Games" 
              description="Play exciting games and challenges"
              variant="hover"
              onClick={() => window.location.href = '/games'}
            >
              <Button 
                variant="primary" 
                size="md" 
                onClick={() => window.location.href = '/games'}
                className="w-full"
              >
                Browse Games
              </Button>
            </Card>
            
            <Card 
              title="📚 Novels" 
              description="Read engaging stories and narratives"
              variant="hover"
              onClick={() => window.location.href = '/novels'}
            >
              <Button 
                variant="primary" 
                size="md" 
                onClick={() => window.location.href = '/novels'}
                className="w-full"
              >
                Explore Novels
              </Button>
            </Card>
            
            <Card 
              title="📋 Briefings" 
              description="Check latest briefings and updates"
              variant="hover"
              onClick={() => window.location.href = '/briefings'}
            >
              <Button 
                variant="primary" 
                size="md" 
                onClick={() => window.location.href = '/briefings'}
                className="w-full"
              >
                View Briefings
              </Button>
            </Card>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              title="Latest Game Release" 
              description="Check out our newest game"
              variant="accent"
            >
              <p className="text-slate-400 mb-4">Coming soon...</p>
              <Button variant="secondary" size="sm">Learn More</Button>
            </Card>
            
            <Card 
              title="New Novel Series" 
              description="Discover our latest story"
              variant="accent"
            >
              <p className="text-slate-400 mb-4">Coming soon...</p>
              <Button variant="secondary" size="sm">Learn More</Button>
            </Card>
          </div>
        </section>

        {/* Stats Section (Optional) */}
        <section className="py-12 border-t border-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-cyan-500 mb-2">100+</p>
              <p className="text-slate-400">Games Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-500 mb-2">50+</p>
              <p className="text-slate-400">Stories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-500 mb-2">1000+</p>
              <p className="text-slate-400">Community Members</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
