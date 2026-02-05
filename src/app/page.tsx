'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 히어로 섹션 */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4">
            <span className="text-cyan-500">이스트시</span>에 오신 것을 환영합니다
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            게임, 소설, 뉴스를 한곳에서 즐기는 현대적이고 세련된 경험
          </p>
        </section>

        {/* 주요 카테고리 */}
        <section className="py-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              title="🎮 게임" 
              description="흥미로운 게임들을 즐겨보세요"
              variant="hover"
              onClick={() => window.location.href = '/games'}
            >
              <Button 
                variant="primary" 
                size="md" 
                onClick={() => window.location.href = '/games'}
                className="w-full"
              >
                게임 둘러보기
              </Button>
            </Card>
            
            <Card 
              title="📚 소설" 
              description="매력적인 이야기들을 읽어보세요"
              variant="hover"
              onClick={() => window.location.href = '/novels'}
            >
              <Button 
                variant="primary" 
                size="md" 
                onClick={() => window.location.href = '/novels'}
                className="w-full"
              >
                소설 탐색하기
              </Button>
            </Card>
            
            <Card 
              title="📋 뉴스" 
              description="최신 뉴스와 소식을 확인하세요"
              variant="hover"
              onClick={() => window.location.href = '/briefings'}
            >
              <Button 
                variant="primary" 
                size="md" 
                onClick={() => window.location.href = '/briefings'}
                className="w-full"
              >
                뉴스 보기
              </Button>
            </Card>
          </div>
        </section>

        {/* 추천 콘텐츠 */}
        <section className="py-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8">추천 콘텐츠</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              title="🆕 최신 게임 출시" 
              description="새로 출시된 게임을 확인해보세요"
              variant="accent"
            >
              <p className="text-slate-400 mb-4">곧 공개됩니다...</p>
              <Button variant="secondary" size="sm">더 알아보기</Button>
            </Card>
            
            <Card 
              title="📖 신작 소설 시리즈" 
              description="최신 스토리를 만나보세요"
              variant="accent"
            >
              <p className="text-slate-400 mb-4">곧 공개됩니다...</p>
              <Button variant="secondary" size="sm">더 알아보기</Button>
            </Card>
          </div>
        </section>

        {/* 통계 섹션 */}
        <section className="py-12 border-t border-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-cyan-500 mb-2">100+</p>
              <p className="text-slate-400">이용 가능한 게임</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-500 mb-2">50+</p>
              <p className="text-slate-400">소설</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-500 mb-2">1,000+</p>
              <p className="text-slate-400">커뮤니티 멤버</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
