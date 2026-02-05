'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ProfilePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">👤 프로필</h1>
        <p className="text-lg md:text-xl text-slate-400 mb-12">계정 설정을 관리하세요</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            title="👤 사용자 정보" 
            description="프로필 상세 정보"
            variant="hover"
          >
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">사용자명:</span> 손님
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">이메일:</span> user@example.com
            </p>
            <Button variant="secondary" size="sm">프로필 편집</Button>
          </Card>

          <Card 
            title="📊 통계" 
            description="게임 플레이 통계"
            variant="hover"
          >
            <p className="text-slate-300 mb-2">
              <span className="text-cyan-400 font-semibold">플레이한 게임:</span> 0개
            </p>
            <p className="text-slate-300 mb-2">
              <span className="text-cyan-400 font-semibold">최고 점수:</span> 0
            </p>
            <p className="text-slate-300 mb-4">
              <span className="text-cyan-400 font-semibold">읽은 소설:</span> 0개
            </p>
            <Button variant="secondary" size="sm">통계 보기</Button>
          </Card>

          <Card 
            title="⚙️ 설정" 
            description="계정 환경 설정"
            variant="hover"
          >
            <p className="text-slate-300 mb-4">다크 테마: 활성화됨</p>
            <Button variant="secondary" size="sm">설정 변경</Button>
          </Card>

          <Card 
            title="🔐 계정" 
            description="계정 접근 관리"
            variant="hover"
          >
            <p className="text-slate-300 mb-4">연결된 계정: 없음</p>
            <Button variant="danger" size="sm">로그아웃</Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
