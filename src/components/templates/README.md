# MinimalLayout Template

eastsea.monster 스타일의 미니멀 레이아웃 템플릿

## Features

- ✅ 하얀 배경 + 깨끗한 디자인
- ✅ 중앙 정렬 로고 (Space Grotesk Bold 폰트)
- ✅ 가로 스크롤 카테고리 필터
- ✅ 미니멀 푸터
- ✅ 모바일 반응형
- ✨ **커스텀 폰트**: Space Grotesk (default) / Poppins (alt)

## Typography

### Logo Fonts

**Space Grotesk Bold** (default):
- 모던하고 기하학적인 디자인
- 테크/게임 브랜드에 적합
- letter-spacing: -0.05em (타이트하고 모던함)
- 호버 시 서체 확장 애니메이션

**Poppins ExtraBold** (alternative):
- 친근하고 프로페셔널함
- 더 부드러운 느낌
- letter-spacing: -0.03em

## Usage

```tsx
import MinimalLayout from '@/components/templates/MinimalLayout';

export default function MyPage() {
  return (
    <MinimalLayout
      logo="eastsea"
      subtitle="일일 브리핑 · 기술 리포트 · 개발 인사이트"
      categories={['전체', '브리핑', '다이제스트', '리포트']}
      onCategoryChange={(category) => console.log('Selected:', category)}
      logoStyle="default" // or "alt" for Poppins
    >
      <YourContent />
    </MinimalLayout>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string` | `'eastsea'` | 로고 텍스트 |
| `subtitle` | `string` | `'일일 브리핑 ·...'` | 로고 아래 부제 |
| `categories` | `string[]` | `['전체', ...]` | 카테고리 목록 |
| `onCategoryChange` | `(cat: string) => void` | - | 카테고리 선택 시 콜백 |
| `footerText` | `string` | `'© 2026 East Sea Games...'` | 푸터 텍스트 |
| `footerLinks` | `{ label, href }[]` | `[...]` | 푸터 링크 목록 |
| `logoStyle` | `'default' \| 'alt'` | `'default'` | 폰트 선택 (Space Grotesk / Poppins) |

## Design Tokens

```css
/* globals.css에서 사용됨 */
--font-space-grotesk: Space Grotesk, sans-serif;
--font-poppins: Poppins, sans-serif;
--background: #ffffff;
--blue: #3b82f6;
--gray: #64748b;
--border: #e2e8f0;
```

## CSS Classes

```css
.logo-text          /* Space Grotesk Bold, -0.05em spacing */
.logo-text-alt      /* Poppins ExtraBold, -0.03em spacing */
.logo-underline     /* 밑줄 효과 (3px solid) */
```

## Screenshot

![eastsea.monster](https://eastsea.monster)

## License

MIT
