'use client';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="mb-2">Curated Collections</h2>
            <p className="text-gray-400">Hand-picked gems from the indie scene.</p>
          </div>
          <Button variant="ghost">View All</Button>
        </div>

        <div className="grid-layout">
          {[
            { title: 'Cyberpunk Odyssey', desc: 'A neon-soaked RPG set in the heart of Neo-Seoul.', tag: 'RPG' },
            { title: 'Forgotten Realms', desc: 'Classic top-down adventure with modern mechanics.', tag: 'Adventure' },
            { title: 'Pixel Tactics', desc: 'Fast-paced strategy for the tactical mind.', tag: 'Strategy' },
          ].map((game, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card 
                title={game.title} 
                description={game.desc}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded">{game.tag}</span>
                  <Button variant="primary" size="sm">Play Now</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gold-500/5 border-y border-gold-500/10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { id: '01', title: 'Weekly Curation', desc: 'We filter out the noise. Only the top 1% of indie games make it to our spotlight.' },
            { id: '02', title: 'Native Experience', desc: 'Play directly in your browser or Telegram. No downloads, no friction.' },
            { id: '03', title: 'Earn Rewards', desc: 'Play to earn tokens. Support indie devs while being rewarded for your time.' },
          ].map((item) => (
            <div key={item.id}>
              <div className="text-4xl text-gold-500 mb-4 font-serif">{item.id}</div>
              <h4 className="text-gold-400 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 border-t border-gray-900 text-center">
        <p className="text-gray-600 text-sm">© 2026 Monster V2. Built with UnoCSS + Framer Motion.</p>
      </footer>
    </Layout>
  );
}
