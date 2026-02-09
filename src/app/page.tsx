'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  // Sample posts - replace with actual data fetching
  const posts = [
    { 
      title: '2026-02-05 일일 브리핑', 
      desc: '오늘의 기술 뉴스와 인사이트를 한눈에 확인하세요.', 
      category: '브리핑',
      date: '2026-02-05'
    },
    { 
      title: 'Next.js 15 성능 최적화 가이드', 
      desc: '새로운 캐싱 전략과 Turbopack 활용법을 알아봅니다.', 
      category: '리포트',
      date: '2026-02-04'
    },
    { 
      title: 'Rust WASM 게임 개발 시작하기', 
      desc: 'Macroquad를 활용한 본격 게임 개발 프로젝트.', 
      category: '리서치',
      date: '2026-02-03'
    },
    { 
      title: '개발자 일기: 오늘의 학습', 
      desc: 'TypeScript 타입 시스템에 대한 깊이 있는 이해.', 
      category: '일기',
      date: '2026-02-02'
    },
    { 
      title: 'Godot 4.6 HTML5 Export 가이드', 
      desc: '웹 브라우저에서 구동되는 게임 만들기.', 
      category: '리포트',
      date: '2026-02-01'
    },
    { 
      title: 'AI 이미지 생성 파이프라인', 
      desc: 'Gemini + MLX Z-Image를 활용한 자동화 시스템.', 
      category: '업그레이드',
      date: '2026-01-31'
    },
  ];

  // Featured games
  const featuredGames = [
    {
      title: '🟢 슬라임 서바이버 PREMIUM',
      desc: '뱀서라이크 프리미엄 에디션 — 프로그레션, 캐릭터 해금, 보스전!',
      url: 'https://games.eastsea.xyz/slime-survivor-premium/',
      tag: '⭐ Featured'
    },
    {
      title: '⚔️ Puzzle Rogue Dungeon',
      desc: 'Match-3 전투 + 25층 로그라이크 던전! 4영웅 클래스, 20종 유물',
      url: 'https://games.eastsea.xyz/puzzle-rogue/',
      tag: '✨ NEW'
    },
    {
      title: '🧱 J&J Brick Breaker',
      desc: 'Godot 엔진으로 만든 벽돌깨기! 패들로 공을 튕겨 벽돌을 부수세요.',
      url: 'https://games.eastsea.xyz/brick-breaker-godot/',
      tag: '⭐ POLISHED'
    },
    {
      title: '🍣 Sushi Sprint',
      desc: '스시 바 타임매니지먼트! 11종 레시피, 웨이브 시스템, 가게 업그레이드!',
      url: 'https://games.eastsea.xyz/sushi-sprint/',
      tag: '⭐ POLISHED'
    }
  ];

  return (
    <Layout>
      {/* Games Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🎮 게임 아케이드
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              HTML5 캐주얼 게임 — 브라우저에서 바로 플레이!
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full">
              <span className="text-3xl font-bold text-blue-600">89</span>
              <span className="text-sm font-medium text-gray-700">개 게임</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredGames.map((game, i) => (
              <motion.a
                key={i}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <article className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-xl hover:border-blue-400 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-500 text-white">
                      {game.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    {game.desc}
                  </p>
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      지금 플레이하기 →
                    </span>
                  </div>
                </article>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/games"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              모든 게임 보기 (89개)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">최근 포스트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-blue-50 text-blue-600">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {post.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    자세히 보기 →
                  </button>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
