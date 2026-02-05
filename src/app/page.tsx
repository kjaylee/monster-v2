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

      {/* Curated Collections Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="mb-2 text-slate-100">Curated Collections</h2>
            <p className="text-slate-400">Hand-picked gems from the indie scene.</p>
          </div>
          <Button variant="ghost">View All</Button>
        </div>

        <div className="grid-layout">
          {[
            { title: 'Cyberpunk Odyssey', desc: 'A neon-soaked RPG set in the heart of Neo-Seoul.', tag: 'RPG', color: 'cyan' },
            { title: 'Forgotten Realms', desc: 'Classic top-down adventure with modern mechanics.', tag: 'Adventure', color: 'purple' },
            { title: 'Pixel Tactics', desc: 'Fast-paced strategy for the tactical mind.', tag: 'Strategy', color: 'emerald' },
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
                variant="hover"
              >
                <div className="flex justify-between items-center">
                  <span className={`
                    text-xs font-bold px-2 py-1 rounded
                    ${
                      game.color === 'cyan' ? 'text-cyan-400 bg-cyan-500/10' :
                      game.color === 'purple' ? 'text-purple-400 bg-purple-500/10' :
                      'text-emerald-400 bg-emerald-500/10'
                    }
                  `}>
                    {game.tag}
                  </span>
                  <Button variant="primary" size="sm">Play Now</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-800/50 border-y border-slate-700/50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { 
              id: '01', 
              title: 'Weekly Curation', 
              desc: 'We filter out the noise. Only the top 1% of indie games make it to our spotlight.',
              color: 'cyan'
            },
            { 
              id: '02', 
              title: 'Native Experience', 
              desc: 'Play directly in your browser or Telegram. No downloads, no friction.',
              color: 'purple'
            },
            { 
              id: '03', 
              title: 'Earn Rewards', 
              desc: 'Play to earn tokens. Support indie devs while being rewarded for your time.',
              color: 'emerald'
            },
          ].map((item) => (
            <div key={item.id}>
              <div className={`
                text-5xl mb-4 font-bold
                ${
                  item.color === 'cyan' ? 'text-cyan-500' :
                  item.color === 'purple' ? 'text-purple-500' :
                  'text-emerald-500'
                }
              `}>
                {item.id}
              </div>
              <h4 className="text-slate-100 text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-800 text-center bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <span className="text-3xl font-bold">
              <span className="text-cyan-500">EAST</span>
              <span className="text-slate-100">SEA</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm mb-4">
            © 2026 Eastsea. Built with Next.js 15 + UnoCSS + Framer Motion.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
