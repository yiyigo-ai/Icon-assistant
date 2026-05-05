// 预设图标库 - 符合icon设计规范.md标准
// 画布: 88x88px, 安全边距: 8px, 主体区域: 72x72px居中
// 所有线条使用圆角：stroke-linecap="round" stroke-linejoin="round"
//
// 【强制规范】描边粗细：
// - simple-linear: 2px (统一，无填充)
// - color-linear: 2px (统一，无填充，最多3色)
// - line-surface: 1.5px (统一，填充透明度0.7)
// - color-surface: 1px (统一，实心填充)

const presetIcons = {
  '鞋子': {
    keywords: ['鞋', '鞋子', '运动鞋', 'sneaker', 'shoe', '高跟鞋', '皮鞋'],
    category: 'fashion',
    variants: [
      {
        name: '运动鞋',
        svg: {
          // 运动鞋 - 侧面视角，清晰的轮廓
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <!-- 鞋底 -->
            <path d="M10 62 L10 66 Q10 70 14 70 L74 70 Q78 70 78 66 L78 62 Q78 58 74 58 L10 58 Q10 62 10 62 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 鞋面主体 -->
            <path d="M18 58 L18 44 Q18 36 26 32 L38 28 Q44 26 50 28 L58 32 Q62 34 62 38 L62 58" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 鞋领 -->
            <path d="M26 32 L26 26 Q26 22 30 22 L46 22 Q50 22 50 26 L50 32" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 鞋带孔 -->
            <circle cx="34" cy="38" r="2" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="36" r="2" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="54" cy="38" r="2" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M10 62 L10 66 Q10 70 14 70 L74 70 Q78 70 78 66 L78 62 Q78 58 74 58 L10 58 Q10 62 10 62 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 58 L18 44 Q18 36 26 32 L38 28 Q44 26 50 28 L58 32 Q62 34 62 38 L62 58" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 32 L26 26 Q26 22 30 22 L46 22 Q50 22 50 26 L50 32" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="34" cy="38" r="2" fill="none" stroke="#D4AF37" stroke-width="2"/>
            <circle cx="44" cy="36" r="2" fill="none" stroke="#D4AF37" stroke-width="2"/>
            <circle cx="54" cy="38" r="2" fill="none" stroke="#D4AF37" stroke-width="2"/>
          </svg>`,
          // 线面结合：只有鞋底区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M10 62 L10 66 Q10 70 14 70 L74 70 Q78 70 78 66 L78 62 Q78 58 74 58 L10 58 Q10 62 10 62 Z" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 58 L18 44 Q18 36 26 32 L38 28 Q44 26 50 28 L58 32 Q62 34 62 38 L62 58" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 32 L26 26 Q26 22 30 22 L46 22 Q50 22 50 26 L50 32" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="34" cy="38" r="2" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="44" cy="36" r="2" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="54" cy="38" r="2" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有鞋底区域填充 -->
            <path d="M12 60 L12 66 Q12 68 14 68 L72 68 Q76 68 76 66 L76 60 Q76 58 72 58 L16 58 Q12 58 12 60 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M10 62 L10 66 Q10 70 14 70 L74 70 Q78 70 78 66 L78 62 Q78 58 74 58 L10 58 Q10 62 10 62 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M18 58 L18 44 Q18 36 26 32 L38 28 Q44 26 50 28 L58 32 Q62 34 62 38 L62 58" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M26 32 L26 26 Q26 22 30 22 L46 22 Q50 22 50 26 L50 32" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="34" cy="38" r="3" fill="white"/>
            <circle cx="44" cy="36" r="3" fill="white"/>
            <circle cx="54" cy="38" r="3" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '皮鞋',
        svg: {
          // 皮鞋 - 正侧面商务款
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <!-- 鞋底 -->
            <path d="M12 56 L12 60 Q12 64 16 64 L68 64 Q72 64 72 60 L72 56" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 鞋面主体 -->
            <path d="M12 56 L12 48 Q12 40 20 36 L44 32 Q56 32 60 40 L72 56" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 鞋头装饰线 -->
            <path d="M44 32 Q52 34 56 40 L60 48" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M12 56 L12 60 Q12 64 16 64 L68 64 Q72 64 72 60 L72 56" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 56 L12 48 Q12 40 20 36 L44 32 Q56 32 60 40 L72 56" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M44 32 Q52 34 56 40 L60 48" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          // 线面结合：只有鞋头区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M12 56 L12 60 Q12 64 16 64 L68 64 Q72 64 72 60 L72 56" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 56 L12 48 Q12 40 20 36 L44 32 Q56 32 60 40 L72 56" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M44 32 Q52 34 56 40 L60 48" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 只有鞋头区域填充 -->
            <path d="M44 32 Q56 32 60 40 L72 56 L56 56 L56 40 Q52 34 44 32 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M12 56 L12 60 Q12 64 16 64 L68 64 Q72 64 72 60 L72 56" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M12 56 L12 48 Q12 40 20 36 L44 32 Q56 32 60 40 L72 56" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M44 32 Q52 34 56 40 L60 48" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        }
      },
      {
        name: '高跟鞋',
        svg: {
          // 高跟鞋 - 优雅侧面轮廓
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <!-- 鞋底平台 -->
            <path d="M14 62 L14 68 Q14 72 18 72 L52 72 Q56 72 56 68 L56 62" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 鞋面 -->
            <path d="M14 62 L14 50 Q14 42 22 38 L48 28 Q58 24 62 16" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 细高跟 -->
            <path d="M50 72 L50 80 Q50 82 48 82" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 62 L14 68 Q14 72 18 72 L52 72 Q56 72 56 68 L56 62" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 62 L14 50 Q14 42 22 38 L48 28 Q58 24 62 16" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M50 72 L50 80 Q50 82 48 82" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="38" cy="34" r="3" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有鞋头区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 62 L14 68 Q14 72 18 72 L52 72 Q56 72 56 68 L56 62" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 62 L14 50 Q14 42 22 38 L48 28 Q58 24 62 16" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M50 72 L50 80 Q50 82 48 82" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 只有鞋头区域填充 -->
            <path d="M14 62 L14 68 Q14 72 18 72 L32 72 L32 66 Q32 62 28 62 L14 62 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 62 L14 68 Q14 72 18 72 L52 72 Q56 72 56 68 L56 62" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M14 62 L14 50 Q14 42 22 38 L48 28 Q58 24 62 16" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M50 72 L50 80 Q50 82 48 82" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="38" cy="34" r="4" fill="white"/>
          </svg>`,
        }
      }
    ]
  },
  '裙子': {
    keywords: ['裙', '裙子', 'dress', 'skirt'],
    category: 'fashion',
    variants: [
      {
        name: 'A字裙',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M38 14 L38 24 Q20 48 18 70 Q18 72 20 72 L68 72 Q70 72 70 70 Q68 48 50 24 L50 14 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M38 14 L38 24 Q20 48 18 70 Q18 72 20 72 L68 72 Q70 72 70 70 Q68 48 50 24 L50 14 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M34 50 Q44 54 54 50" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="19" r="3" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有腰带区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M38 14 L38 24 Q20 48 18 70 Q18 72 20 72 L68 72 Q70 72 70 70 Q68 48 50 24 L50 14 Z" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 只有腰带区域填充 -->
            <path d="M38 14 L38 24 L50 24 L50 14 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M38 14 L38 24 Q20 48 18 70 Q18 72 20 72 L68 72 Q70 72 70 70 Q68 48 50 24 L50 14 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M38 24 L50 24" stroke="white" stroke-width="1"/>
            <circle cx="44" cy="19" r="4" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '百褶裙',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M34 16 L34 24 Q16 48 14 70 Q14 72 16 72 L72 72 Q74 72 74 70 Q72 48 54 24 L54 16 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 46 L26 72 M38 38 L38 72 M50 38 L50 72 M62 46 L62 72" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M34 16 L34 24 Q16 48 14 70 Q14 72 16 72 L72 72 Q74 72 74 70 Q72 48 54 24 L54 16 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 46 L26 72 M38 38 L38 72 M50 38 L50 72 M62 46 L62 72" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          // 线面结合：只有腰带区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M34 16 L34 24 Q16 48 14 70 Q14 72 16 72 L72 72 Q74 72 74 70 Q72 48 54 24 L54 16 Z" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 46 L26 72 M38 38 L38 72 M50 38 L50 72 M62 46 L62 72" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有腰带区域填充 -->
            <path d="M34 16 L34 24 L54 24 L54 16 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M34 16 L34 24 Q16 48 14 70 Q14 72 16 72 L72 72 Q74 72 74 70 Q72 48 54 24 L54 16 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M26 46 L26 72 M38 38 L38 72 M50 38 L50 72 M62 46 L62 72" stroke="white" stroke-width="1" stroke-linecap="round"/>
          </svg>`,
        }
      },
      {
        name: '连衣裙',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="20" r="8" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M34 28 Q28 36 24 44 Q18 60 20 72 L68 72 Q70 60 64 44 Q60 36 54 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M38 32 L50 32" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="20" r="8" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M34 28 Q28 36 24 44 Q18 60 20 72 L68 72 Q70 60 64 44 Q60 36 54 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="44" cy="48" r="4" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有领口区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="20" r="8" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M34 28 Q28 36 24 44 Q18 60 20 72 L68 72 Q70 60 64 44 Q60 36 54 28" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M38 32 L50 32" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有领口区域填充 -->
            <circle cx="44" cy="20" r="8" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="20" r="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M34 28 Q28 36 24 44 Q18 60 20 72 L68 72 Q70 60 64 44 Q60 36 54 28" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="44" cy="48" r="5" fill="white"/>
          </svg>`,
        }
      }
    ]
  },
  '口红': {
    keywords: ['口红', '唇膏', 'lipstick', '美妆'],
    category: 'beauty',
    variants: [
      {
        name: '经典口红',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="32" y="44" width="24" height="30" rx="3" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="36" y="34" width="16" height="12" rx="2" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M40 34 L40 18 Q40 14 44 14 Q48 14 48 18 L48 34" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="32" y="44" width="24" height="30" rx="3" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="36" y="34" width="16" height="12" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/>
            <path d="M40 34 L40 18 Q40 14 44 14 Q48 14 48 18 L48 34" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="22" r="2" fill="#ec4899"/>
          </svg>`,
          // 线面结合：只有口红头部上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="32" y="44" width="24" height="30" rx="3" fill="none" stroke="${color}" stroke-width="1.5"/>
            <rect x="36" y="34" width="16" height="12" rx="2" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M40 34 L40 18 Q40 14 44 14 Q48 14 48 18 L48 34" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有口红头部填充 -->
            <path d="M40 34 L40 18 Q40 14 44 14 Q48 14 48 18 L48 34 Z" fill="#ec4899" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="32" y="44" width="24" height="30" rx="3" fill="${color}" stroke="${color}" stroke-width="1"/>
            <rect x="36" y="34" width="16" height="12" rx="2" fill="#6b7280" stroke="#6b7280" stroke-width="1"/>
            <path d="M40 34 L40 18 Q40 14 44 14 Q48 14 48 18 L48 34" fill="#ec4899" stroke="#ec4899" stroke-width="1"/>
            <line x1="40" y1="52" x2="48" y2="52" stroke="white" stroke-width="1"/>
          </svg>`,
        }
      },
      {
        name: '唇膏管',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="44" cy="24" rx="14" ry="6" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M30 24 L30 62 Q30 70 44 70 Q58 70 58 62 L58 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M30 36 L58 36" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="44" cy="24" rx="14" ry="6" fill="none" stroke="#ec4899" stroke-width="2"/>
            <path d="M30 24 L30 62 Q30 70 44 70 Q58 70 58 62 L58 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M30 36 L58 36" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="54" r="4" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有盖子顶部上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="44" cy="24" rx="14" ry="6" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M30 24 L30 62 Q30 70 44 70 Q58 70 58 62 L58 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M30 36 L58 36" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有盖子顶部填充 -->
            <ellipse cx="44" cy="24" rx="14" ry="6" fill="#ec4899" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="44" cy="24" rx="14" ry="6" fill="#ec4899" stroke="#ec4899" stroke-width="1"/>
            <path d="M30 24 L30 62 Q30 70 44 70 Q58 70 58 62 L58 24" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="44" cy="54" r="5" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '口红印',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M32 38 Q32 26 44 26 Q56 26 56 38 L56 52 Q56 58 44 58 Q32 58 32 52 Z" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M36 46 Q44 50 52 46" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M32 38 Q32 26 44 26 Q56 26 56 38 L56 52 Q56 58 44 58 Q32 58 32 52 Z" fill="none" stroke="#ec4899" stroke-width="2"/>
            <path d="M36 46 Q44 50 52 46" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="38" cy="38" r="3" fill="#D4AF37"/>
            <circle cx="50" cy="38" r="3" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有嘴唇中间部分上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M32 38 Q32 26 44 26 Q56 26 56 38 L56 52 Q56 58 44 58 Q32 58 32 52 Z" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M36 46 Q44 50 52 46" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有嘴唇中间填充 -->
            <path d="M36 46 Q44 50 52 46 L52 42 Q52 38 44 38 Q36 38 36 42 Z" fill="#ec4899" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M32 38 Q32 26 44 26 Q56 26 56 38 L56 52 Q56 58 44 58 Q32 58 32 52 Z" fill="#ec4899" stroke="#ec4899" stroke-width="1"/>
            <path d="M36 46 Q44 50 52 46" fill="none" stroke="white" stroke-width="1" stroke-linecap="round"/>
            <circle cx="38" cy="38" r="4" fill="white"/>
            <circle cx="50" cy="38" r="4" fill="white"/>
          </svg>`,
        }
      }
    ]
  },
  '手机': {
    keywords: ['手机', '电话', 'phone', 'mobile'],
    category: 'electronics',
    variants: [
      {
        name: '智能手机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="12" width="40" height="64" rx="8" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M24 24 L64 24" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M24 64 L64 64" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="72" r="4" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="12" width="40" height="64" rx="8" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="36" y="16" width="16" height="4" rx="2" fill="#6b7280"/>
            <circle cx="52" cy="20" r="2" fill="#2E8B57"/>
            <circle cx="44" cy="72" r="4" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          // 线面结合：只有屏幕区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="12" width="40" height="64" rx="8" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M24 24 L64 24" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M24 64 L64 64" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="44" cy="72" r="4" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有屏幕区域填充 -->
            <rect x="28" y="28" width="32" height="32" rx="3" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="12" width="40" height="64" rx="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <rect x="28" y="28" width="32" height="32" rx="3" fill="white"/>
            <circle cx="44" cy="72" r="5" fill="white"/>
            <rect x="36" y="16" width="12" height="4" rx="2" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '翻盖手机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="28" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M24 36 L24 76 Q24 80 28 80 L60 80 Q64 80 64 76 L64 36" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="22" r="6" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="28" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M24 36 L24 76 Q24 80 28 80 L60 80 Q64 80 64 76 L64 36" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="22" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="36" cy="56" r="3" fill="#2E8B57"/>
            <circle cx="52" cy="56" r="3" fill="#2E8B57"/>
          </svg>`,
          // 线面结合：只有屏幕区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="28" rx="4" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M24 36 L24 76 Q24 80 28 80 L60 80 Q64 80 64 76 L64 36" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="44" cy="22" r="6" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有屏幕圆形区域填充 -->
            <circle cx="44" cy="22" r="6" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="28" rx="4" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M24 36 L24 76 Q24 80 28 80 L60 80 Q64 80 64 76 L64 36" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="44" cy="22" r="6" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '滑盖手机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="32" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="24" y="44" width="40" height="36" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M32 56 L56 56" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M32 64 L56 64" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="32" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="24" y="44" width="40" height="36" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="32" y="54" width="24" height="4" rx="2" fill="#2E8B57"/>
            <rect x="32" y="62" width="24" height="4" rx="2" fill="#6b7280"/>
          </svg>`,
          // 线面结合：只有按键区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="32" rx="4" fill="none" stroke="${color}" stroke-width="1.5"/>
            <rect x="24" y="44" width="40" height="36" rx="4" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M32 56 L56 56" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M32 64 L56 64" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有按键区域填充 -->
            <rect x="32" y="54" width="24" height="4" rx="2" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="8" width="40" height="32" rx="4" fill="${color}" stroke="${color}" stroke-width="1"/>
            <rect x="24" y="44" width="40" height="36" rx="4" fill="${color}" stroke="${color}" stroke-width="1"/>
            <rect x="32" y="54" width="24" height="4" rx="2" fill="white"/>
            <rect x="32" y="62" width="24" height="4" rx="2" fill="white"/>
          </svg>`,
        }
      }
    ]
  },
  '耳机': {
    keywords: ['耳机', 'headphone', '音乐'],
    category: 'electronics',
    variants: [
      {
        name: '头戴式耳机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M22 52 L22 42 Q22 22 44 22 Q66 22 66 42 L66 52" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <rect x="16" y="48" width="14" height="22" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="58" y="48" width="14" height="22" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M22 52 L22 42 Q22 22 44 22 Q66 22 66 42 L66 52" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <rect x="16" y="48" width="14" height="22" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="58" y="48" width="14" height="22" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="23" cy="56" r="3" fill="#2E8B57"/>
            <circle cx="65" cy="56" r="3" fill="#2E8B57"/>
          </svg>`,
          // 线面结合：只有耳罩区域上色（耳罩是重点）
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M22 52 L22 42 Q22 22 44 22 Q66 22 66 42 L66 52" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <rect x="16" y="48" width="14" height="22" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <rect x="58" y="48" width="14" height="22" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有左耳罩内部填充 -->
            <rect x="18" y="50" width="10" height="18" rx="4" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M22 52 L22 42 Q22 22 44 22 Q66 22 66 42 L66 52" fill="none" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <rect x="16" y="48" width="14" height="22" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <rect x="58" y="48" width="14" height="22" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="23" cy="56" r="3" fill="white"/>
            <circle cx="65" cy="56" r="3" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '入耳式耳机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="32" cy="40" rx="10" ry="14" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="56" cy="40" rx="10" ry="14" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M32 54 Q32 68 32 68" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M56 54 Q56 68 56 68" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M32 68 Q44 76 56 68" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="32" cy="40" rx="10" ry="14" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="56" cy="40" rx="10" ry="14" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M32 54 Q32 68 32 68" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M56 54 Q56 68 56 68" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="32" cy="40" r="4" fill="${color}"/>
            <circle cx="56" cy="40" r="4" fill="${color}"/>
          </svg>`,
          // 线面结合：只有左耳机头部上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="32" cy="40" rx="10" ry="14" fill="none" stroke="${color}" stroke-width="1.5"/>
            <ellipse cx="56" cy="40" rx="10" ry="14" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M32 54 Q32 68 32 68" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M56 54 Q56 68 56 68" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有左耳机内部填充 -->
            <ellipse cx="32" cy="40" rx="6" ry="8" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <ellipse cx="32" cy="40" rx="10" ry="14" fill="${color}" stroke="${color}" stroke-width="1"/>
            <ellipse cx="56" cy="40" rx="10" ry="14" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M32 54 Q32 68 32 68" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <path d="M56 54 Q56 68 56 68" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <circle cx="32" cy="40" r="5" fill="white"/>
            <circle cx="56" cy="40" r="5" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '游戏耳机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M24 48 Q24 26 44 26 Q64 26 64 48" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="24" cy="52" r="8" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="64" cy="52" r="8" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M32 58 Q44 66 56 58" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M24 48 Q24 26 44 26 Q64 26 64 48" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="24" cy="52" r="8" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="64" cy="52" r="8" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M32 58 Q44 66 56 58" fill="none" stroke="#2E8B57" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          // 线面结合：只有左耳罩上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M24 48 Q24 26 44 26 Q64 26 64 48" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="24" cy="52" r="8" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="64" cy="52" r="8" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M32 58 Q44 66 56 58" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有左耳罩填充 -->
            <circle cx="24" cy="52" r="6" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M24 48 Q24 26 44 26 Q64 26 64 48" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="24" cy="52" r="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="64" cy="52" r="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M32 58 Q44 66 56 58" fill="none" stroke="white" stroke-width="1" stroke-linecap="round"/>
          </svg>`,
        }
      }
    ]
  },
  '包包': {
    keywords: ['包', '包包', '手提包', 'bag', 'handbag'],
    category: 'fashion',
    variants: [
      {
        name: '手提包',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="32" width="56" height="42" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 32 L28 24 Q28 16 44 16 Q60 16 60 24 L60 32" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="32" width="56" height="42" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 32 L28 24 Q28 16 44 16 Q60 16 60 24 L60 32" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="54" r="6" fill="none" stroke="#D4AF37" stroke-width="2"/>
          </svg>`,
          // 线面结合：只有包扣区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="32" width="56" height="42" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M28 32 L28 24 Q28 16 44 16 Q60 16 60 24 L60 32" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有包扣区域填充 -->
            <circle cx="44" cy="54" r="6" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="32" width="56" height="42" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M28 32 L28 24 Q28 16 44 16 Q60 16 60 24 L60 32" fill="none" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <circle cx="44" cy="54" r="6" fill="#FFEAA7"/>
          </svg>`,
        }
      },
      {
        name: '双肩包',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="20" y="24" width="48" height="52" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 24 L28 16 Q28 12 32 12 L36 12" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M60 24 L60 16 Q60 12 56 12 L52 12" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 44 L68 44" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="20" y="24" width="48" height="52" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 24 L28 16 Q28 12 32 12 L36 12" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M60 24 L60 16 Q60 12 56 12 L52 12" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <rect x="28" y="52" width="32" height="16" rx="3" fill="none" stroke="#D4AF37" stroke-width="2"/>
          </svg>`,
          // 线面结合：只有前口袋区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="20" y="24" width="48" height="52" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M28 24 L28 16 Q28 12 32 12 L36 12" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M60 24 L60 16 Q60 12 56 12 L52 12" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M20 44 L68 44" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有前口袋区域填充 -->
            <rect x="28" y="52" width="32" height="16" rx="3" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="20" y="24" width="48" height="52" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M28 24 L28 16 Q28 12 32 12 L36 12" fill="none" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <path d="M60 24 L60 16 Q60 12 56 12 L52 12" fill="none" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <rect x="28" y="52" width="32" height="16" rx="3" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '斜挎包',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="28" y="38" width="36" height="28" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 38 L18 18" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 46 L56 46" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 54 L52 54" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="28" y="38" width="36" height="28" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 38 L18 18" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 46 L56 46" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 54 L52 54" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          // 线面结合：只有翻盖区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="28" y="38" width="36" height="28" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M28 38 L18 18" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 46 L56 46" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 54 L52 54" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有翻盖区域填充 -->
            <path d="M32 46 L56 46 L56 52 L32 52 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="28" y="38" width="36" height="28" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M28 38 L18 18" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <path d="M36 46 L56 46" stroke="white" stroke-width="1" stroke-linecap="round"/>
            <path d="M36 54 L52 54" stroke="white" stroke-width="1" stroke-linecap="round"/>
          </svg>`,
        }
      }
    ]
  },
  '手表': {
    keywords: ['手表', '表', 'watch'],
    category: 'fashion',
    variants: [
      {
        name: '圆形表盘',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="44" r="20" fill="none" stroke="${color}" stroke-width="2"/>
            <line x1="44" y1="44" x2="44" y2="32" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="52" y2="44" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M38 24 L38 14 Q38 12 40 12 L48 12 Q50 12 50 14 L50 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M38 64 L38 74 Q38 76 40 76 L48 76 Q50 76 50 74 L50 64" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="44" r="20" fill="none" stroke="${color}" stroke-width="2"/>
            <line x1="44" y1="44" x2="44" y2="30" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="54" y2="44" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="44" r="3" fill="#D4AF37"/>
            <path d="M38 24 L38 14 Q38 12 40 12 L48 12 Q50 12 50 14 L50 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M38 64 L38 74 Q38 76 40 76 L48 76 Q50 76 50 74 L50 64" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          // 线面结合：只有表盘中心区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="44" r="20" fill="none" stroke="${color}" stroke-width="1.5"/>
            <line x1="44" y1="44" x2="44" y2="30" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="54" y2="44" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M38 24 L38 14 Q38 12 40 12 L48 12 Q50 12 50 14 L50 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M38 64 L38 74 Q38 76 40 76 L48 76 Q50 76 50 74 L50 64" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有表盘中心小区域填充 -->
            <circle cx="44" cy="44" r="8" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="44" r="20" fill="${color}" stroke="${color}" stroke-width="1"/>
            <line x1="44" y1="44" x2="44" y2="28" stroke="white" stroke-width="1" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="56" y2="44" stroke="white" stroke-width="1" stroke-linecap="round"/>
            <circle cx="44" cy="44" r="3" fill="white"/>
            <path d="M38 24 L38 14 Q38 12 40 12 L48 12 Q50 12 50 14 L50 24" fill="${color}" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
            <path d="M38 64 L38 74 Q38 76 40 76 L48 76 Q50 76 50 74 L50 64" fill="${color}" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
          </svg>`,
        }
      },
      {
        name: '方形表盘',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="24" width="40" height="40" rx="8" fill="none" stroke="${color}" stroke-width="2"/>
            <line x1="44" y1="32" x2="44" y2="44" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="54" y2="44" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 24 L36 16 L52 16 L52 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 64 L36 72 L52 72 L52 64" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="24" width="40" height="40" rx="8" fill="none" stroke="${color}" stroke-width="2"/>
            <line x1="44" y1="32" x2="44" y2="44" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="54" y2="44" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="44" r="3" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有表盘中心区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="24" width="40" height="40" rx="8" fill="none" stroke="${color}" stroke-width="1.5"/>
            <line x1="44" y1="32" x2="44" y2="44" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="54" y2="44" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 24 L36 16 L52 16 L52 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 64 L36 72 L52 72 L52 64" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有表盘中心区域填充 -->
            <rect x="36" y="36" width="16" height="16" rx="4" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="24" width="40" height="40" rx="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <line x1="44" y1="32" x2="44" y2="44" stroke="white" stroke-width="1" stroke-linecap="round"/>
            <line x1="44" y1="44" x2="54" y2="44" stroke="white" stroke-width="1" stroke-linecap="round"/>
            <circle cx="44" cy="44" r="3" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '智能手表',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="20" width="40" height="48" rx="12" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="44" r="14" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M44 36 L44 44 L50 48" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="44" cy="28" r="2" fill="${color}"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="20" width="40" height="48" rx="12" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="44" r="14" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M44 36 L44 44 L50 48" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="44" cy="28" r="3" fill="#2E8B57"/>
          </svg>`,
          // 线面结合：只有屏幕圆形区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="20" width="40" height="48" rx="12" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="44" cy="44" r="14" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M44 36 L44 44 L50 48" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 只有屏幕圆形区域填充 -->
            <circle cx="44" cy="44" r="10" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="20" width="40" height="48" rx="12" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="44" cy="44" r="14" fill="white"/>
            <path d="M44 36 L44 44 L50 48" fill="none" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="44" cy="28" r="3" fill="white"/>
          </svg>`,
        }
      }
    ]
  },
  '相机': {
    keywords: ['相机', '照相机', 'camera', '拍照', '摄影'],
    category: 'photography',
    variants: [
      {
        name: '单反相机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="40" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="48" r="12" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="32" y="20" width="24" height="10" rx="3" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="40" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="48" r="12" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="48" r="6" fill="${color}"/>
            <rect x="32" y="20" width="24" height="10" rx="3" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          // 线面结合：只有镜头中心上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="40" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="44" cy="48" r="12" fill="none" stroke="${color}" stroke-width="1.5"/>
            <rect x="32" y="20" width="24" height="10" rx="3" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有镜头中心填充 -->
            <circle cx="44" cy="48" r="6" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="40" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="44" cy="48" r="12" fill="white"/>
            <circle cx="44" cy="48" r="6" fill="${color}"/>
            <rect x="32" y="20" width="24" height="10" rx="3" fill="${color}"/>
          </svg>`,
        }
      },
      {
        name: '复古相机',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="24" width="56" height="44" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="36" cy="46" r="12" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="58" cy="38" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="36" y="16" width="16" height="10" rx="2" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="24" width="56" height="44" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="36" cy="46" r="12" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="58" cy="38" r="6" fill="#FF6B6B" stroke="#FF6B6B" stroke-width="2"/>
          </svg>`,
          // 线面结合：只有快门按钮上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="24" width="56" height="44" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="36" cy="46" r="12" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="58" cy="38" r="6" fill="none" stroke="${color}" stroke-width="1.5"/>
            <rect x="36" y="16" width="16" height="10" rx="2" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有快门按钮填充 -->
            <circle cx="58" cy="38" r="6" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="24" width="56" height="44" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="36" cy="46" r="12" fill="white"/>
            <circle cx="58" cy="38" r="6" fill="#FF6B6B"/>
          </svg>`,
        }
      },
      {
        name: '手机拍照',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="16" width="40" height="56" rx="8" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="40" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="40" r="4" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="62" r="3" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="16" width="40" height="56" rx="8" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="40" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="40" r="4" fill="${color}"/>
            <circle cx="44" cy="62" r="3" fill="#2E8B57"/>
          </svg>`,
          // 线面结合：只有镜头中心上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="16" width="40" height="56" rx="8" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="44" cy="40" r="10" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="44" cy="40" r="4" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="44" cy="62" r="3" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有镜头中心填充 -->
            <circle cx="44" cy="40" r="4" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="24" y="16" width="40" height="56" rx="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="44" cy="40" r="10" fill="white"/>
            <circle cx="44" cy="40" r="4" fill="${color}"/>
          </svg>`,
        }
      }
    ]
  },
  '购物车': {
    keywords: ['购物车', 'cart', '购物', 'shopping', '超市', '商城'],
    category: 'shopping',
    variants: [
      {
        name: '标准购物车',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 22 L24 22 L30 54 L70 54 L76 30 L28 30" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="34" cy="66" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="66" r="6" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 22 L24 22 L30 54 L70 54 L76 30 L28 30" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="34" cy="66" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="66" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="42" cy="42" r="4" fill="#2E8B57"/>
            <circle cx="58" cy="42" r="4" fill="#2E8B57"/>
          </svg>`,
          // 线面结合：只有购物篮区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 22 L24 22 L30 54 L70 54 L76 30 L28 30" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="34" cy="66" r="6" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="62" cy="66" r="6" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有购物篮区域填充 -->
            <path d="M30 54 L70 54 L76 30 L28 30 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 22 L24 22 L30 54 L70 54 L76 30 L28 30" fill="${color}" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="34" cy="66" r="6" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="62" cy="66" r="6" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="42" cy="42" r="5" fill="white"/>
            <circle cx="58" cy="42" r="5" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '购物篮',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M18 42 L26 68 L62 68 L70 42 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30 42 L30 26 Q30 18 44 18 Q58 18 58 26 L58 42" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 50 L36 60" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M52 50 L52 60" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M18 42 L26 68 L62 68 L70 42 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30 42 L30 26 Q30 18 44 18 Q58 18 58 26 L58 42" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="54" r="5" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有把手区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M18 42 L26 68 L62 68 L70 42 Z" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30 42 L30 26 Q30 18 44 18 Q58 18 58 26 L58 42" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 50 L36 60" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M52 50 L52 60" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有把手区域填充 -->
            <path d="M30 42 L30 26 Q30 18 44 18 Q58 18 58 26 L58 42 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M18 42 L26 68 L62 68 L70 42 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M30 42 L30 26 Q30 18 44 18 Q58 18 58 26 L58 42" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="44" cy="54" r="6" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '电商购物车',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="36" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 28 L36 18 L52 18 L60 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="28" cy="68" r="5" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="60" cy="68" r="5" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="36" rx="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M28 28 L36 18 L52 18 L60 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="28" cy="68" r="5" fill="${color}"/>
            <circle cx="60" cy="68" r="5" fill="${color}"/>
            <rect x="36" y="40" width="16" height="12" rx="2" fill="#FF6B6B"/>
          </svg>`,
          // 线面结合：只有车盖区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="36" rx="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M28 28 L36 18 L52 18 L60 28" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="28" cy="68" r="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="60" cy="68" r="5" fill="none" stroke="${color}" stroke-width="1.5"/>
            <!-- 只有车盖区域填充 -->
            <path d="M28 28 L36 18 L52 18 L60 28 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="12" y="28" width="64" height="36" rx="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M28 28 L36 18 L52 18 L60 28" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="28" cy="68" r="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="60" cy="68" r="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <rect x="36" y="40" width="16" height="12" rx="2" fill="white"/>
          </svg>`,
        }
      }
    ]
  },
  '礼物': {
    keywords: ['礼物', 'gift', '礼品', '礼盒', '赠送'],
    category: 'gift',
    variants: [
      {
        name: '礼盒',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="12" y="28" width="64" height="12" rx="3" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M44 28 L44 74" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 28 Q36 20 44 20 Q52 20 52 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="12" y="28" width="64" height="12" rx="3" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M44 28 L44 74" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 28 Q36 18 44 18 Q52 18 52 28" fill="none" stroke="#D4AF37" stroke-width="2"/>
            <circle cx="44" cy="52" r="4" fill="#D4AF37"/>
          </svg>`,
          // 线面结合：只有蝴蝶结区域上色
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="none" stroke="${color}" stroke-width="1.5"/>
            <rect x="12" y="28" width="64" height="12" rx="3" fill="none" stroke="${color}" stroke-width="1.5"/>
            <path d="M44 28 L44 74" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 28 Q36 20 44 20 Q52 20 52 28" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <!-- 只有蝴蝶结区域填充 -->
            <path d="M36 28 Q36 18 44 18 Q52 18 52 28 Z" fill="${color}" fill-opacity="0.7"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="${color}" stroke="${color}" stroke-width="1"/>
            <rect x="12" y="28" width="64" height="12" rx="3" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M44 28 L44 74" stroke="white" stroke-width="1" stroke-linecap="round"/>
            <path d="M36 28 Q36 18 44 18 Q52 18 52 28" fill="#FF6B6B" stroke="#FF6B6B" stroke-width="1"/>
            <circle cx="44" cy="52" r="5" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '礼品袋',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M26 28 L22 70 L66 70 L62 28 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 28 Q26 16 44 16 Q62 16 62 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 28 L36 16 Q36 10 44 10 Q52 10 52 16 L52 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M26 28 L22 70 L66 70 L62 28 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 28 Q26 16 44 16 Q62 16 62 28" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M36 28 L36 16 Q36 10 44 10 Q52 10 52 16 L52 28" fill="none" stroke="#D4AF37" stroke-width="2"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M26 28 L22 70 L66 70 L62 28 Z" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 28 Q26 16 44 16 Q62 16 62 28" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 28 L36 16 Q36 10 44 10 Q52 10 52 16 L52 28" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M26 28 L22 70 L66 70 L62 28 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M26 28 Q26 16 44 16 Q62 16 62 28" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M36 28 L36 16 Q36 10 44 10 Q52 10 52 16 L52 28" fill="#FF6B6B" stroke="#FF6B6B" stroke-width="1"/>
          </svg>`,
        }
      },
      {
        name: '惊喜盒子',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M16 36 Q44 28 72 36" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M28 24 L28 16" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M44 20 L44 12" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M60 24 L60 16" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M16 36 Q44 28 72 36" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M28 24 L28 12" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/>
            <path d="M44 20 L44 8" stroke="#2E8B57" stroke-width="2" stroke-linecap="round"/>
            <path d="M60 24 L60 12" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <path d="M16 36 Q44 28 72 36" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M28 24 L28 16 M44 20 L44 12 M60 24 L60 16" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <rect x="16" y="36" width="56" height="38" rx="4" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M16 36 Q44 28 72 36" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M28 24 L28 12 M44 20 L44 8 M60 24 L60 12" stroke="#FFEAA7" stroke-width="1" stroke-linecap="round"/>
          </svg>`,
        }
      }
    ]
  },
  '鲜花': {
    keywords: ['鲜花', '花', 'flower', '玫瑰', '花卉'],
    category: 'flower',
    variants: [
      {
        name: '玫瑰花',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="32" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M34 32 Q34 22 44 22 Q54 22 54 32" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M38 36 Q38 28 44 28 Q50 28 50 36" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M44 42 L44 70" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M44 56 Q36 52 32 60" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="32" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M34 32 Q34 22 44 22 Q54 22 54 32" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M38 36 Q38 28 44 28 Q50 28 50 36" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M44 42 L44 70" stroke="#2E8B57" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="32" r="4" fill="#D4AF37"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="32" r="10" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <path d="M34 32 Q34 22 44 22 Q54 22 54 32" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M38 36 Q38 28 44 28 Q50 28 50 36" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M44 42 L44 70" stroke="#2E8B57" stroke-width="1.5" stroke-linecap="round"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="32" r="10" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M34 32 Q34 22 44 22 Q54 22 54 32" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M38 36 Q38 28 44 28 Q50 28 50 36" fill="${color}" stroke="${color}" stroke-width="1"/>
            <path d="M44 42 L44 70" stroke="#2E8B57" stroke-width="1" stroke-linecap="round"/>
            <circle cx="44" cy="32" r="4" fill="#FFEAA7"/>
          </svg>`,
        }
      },
      {
        name: '向日葵',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="36" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="44" cy="18" rx="5" ry="8" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="44" cy="54" rx="5" ry="8" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="26" cy="36" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="62" cy="36" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M44 64 L44 72" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="36" r="10" fill="#FFEAA7" stroke="${color}" stroke-width="2"/>
            <ellipse cx="44" cy="18" rx="5" ry="8" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="44" cy="54" rx="5" ry="8" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="26" cy="36" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2"/>
            <ellipse cx="62" cy="36" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="36" r="10" fill="#FFEAA7" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <ellipse cx="44" cy="18" rx="5" ry="8" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <ellipse cx="44" cy="54" rx="5" ry="8" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <ellipse cx="26" cy="36" rx="8" ry="5" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <ellipse cx="62" cy="36" rx="8" ry="5" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="44" cy="36" r="10" fill="#FFEAA7" stroke="#FFEAA7" stroke-width="1"/>
            <ellipse cx="44" cy="18" rx="5" ry="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <ellipse cx="44" cy="54" rx="5" ry="8" fill="${color}" stroke="${color}" stroke-width="1"/>
            <ellipse cx="26" cy="36" rx="8" ry="5" fill="${color}" stroke="${color}" stroke-width="1"/>
            <ellipse cx="62" cy="36" rx="8" ry="5" fill="${color}" stroke="${color}" stroke-width="1"/>
          </svg>`,
        }
      },
      {
        name: '花束',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="32" cy="28" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="56" cy="28" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="20" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M30 38 L34 56 L44 74 L54 56 L58 38" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M36 56 L44 60 L52 56" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="32" cy="28" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="56" cy="28" r="10" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="44" cy="20" r="10" fill="none" stroke="#f472b6" stroke-width="2"/>
            <path d="M30 38 L34 56 L44 74 L54 56 L58 38" fill="none" stroke="#2E8B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="32" cy="28" r="10" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <circle cx="56" cy="28" r="10" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <circle cx="44" cy="20" r="10" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <path d="M30 38 L34 56 L44 74 L54 56 L58 38" fill="#2E8B57" fill-opacity="0.7" stroke="#2E8B57" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <circle cx="32" cy="28" r="10" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="56" cy="28" r="10" fill="#ec4899" stroke="#ec4899" stroke-width="1"/>
            <circle cx="44" cy="20" r="10" fill="#f472b6" stroke="#f472b6" stroke-width="1"/>
            <path d="M30 38 L34 56 L44 74 L54 56 L58 38" fill="#2E8B57" stroke="#2E8B57" stroke-width="1"/>
          </svg>`,
        }
      }
    ]
  },
  '汽车': {
    keywords: ['汽车', '车', 'car', '轿车', '汽车用品'],
    category: 'automotive',
    variants: [
      {
        name: '轿车',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 52 L22 34 L66 34 L74 52 L74 62 Q74 66 70 66 L18 66 Q14 66 14 62 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="66" r="7" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="66" r="7" fill="none" stroke="${color}" stroke-width="2"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 52 L22 34 L66 34 L74 52 L74 62 Q74 66 70 66 L18 66 Q14 66 14 62 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="66" r="7" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="66" r="7" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="26" cy="66" r="3" fill="${color}"/>
            <circle cx="62" cy="66" r="3" fill="${color}"/>
            <rect x="30" y="40" width="12" height="8" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/>
            <rect x="46" y="40" width="12" height="8" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 52 L22 34 L66 34 L74 52 L74 62 Q74 66 70 66 L18 66 Q14 66 14 62 Z" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="66" r="7" fill="none" stroke="${color}" stroke-width="1.5"/>
            <circle cx="62" cy="66" r="7" fill="none" stroke="${color}" stroke-width="1.5"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 52 L22 34 L66 34 L74 52 L74 62 Q74 66 70 66 L18 66 Q14 66 14 62 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="26" cy="66" r="7" fill="#4b5563" stroke="#4b5563" stroke-width="1"/>
            <circle cx="62" cy="66" r="7" fill="#4b5563" stroke="#4b5563" stroke-width="1"/>
            <rect x="30" y="40" width="12" height="8" rx="2" fill="white"/>
            <rect x="46" y="40" width="12" height="8" rx="2" fill="white"/>
          </svg>`,
        }
      },
      {
        name: 'SUV',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 48 L18 26 L32 22 L56 22 L70 26 L74 48 L74 58 Q74 62 70 62 L18 62 Q14 62 14 58 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="62" r="7" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="62" r="7" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M32 22 L32 34" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
            <path d="M56 22 L56 34" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 48 L18 26 L32 22 L56 22 L70 26 L74 48 L74 58 Q74 62 70 62 L18 62 Q14 62 14 58 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="62" r="7" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="62" r="7" fill="none" stroke="${color}" stroke-width="2"/>
            <rect x="30" y="28" width="10" height="8" rx="1" fill="none" stroke="#6b7280" stroke-width="2"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 48 L18 26 L32 22 L56 22 L70 26 L74 48 L74 58 Q74 62 70 62 L18 62 Q14 62 14 58 Z" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="62" r="7" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <circle cx="62" cy="62" r="7" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M14 48 L18 26 L32 22 L56 22 L70 26 L74 48 L74 58 Q74 62 70 62 L18 62 Q14 62 14 58 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="26" cy="62" r="7" fill="#4b5563" stroke="#4b5563" stroke-width="1"/>
            <circle cx="62" cy="62" r="7" fill="#4b5563" stroke="#4b5563" stroke-width="1"/>
            <rect x="30" y="28" width="10" height="8" rx="1" fill="white"/>
          </svg>`,
        }
      },
      {
        name: '跑车',
        svg: {
          'simple-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M10 52 L26 42 L58 42 L78 48 L78 58 Q78 62 74 62 L14 62 Q10 62 10 58 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="62" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="62" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M38 42 L38 34 L52 34 L56 42" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          'color-linear': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M10 52 L26 42 L58 42 L78 48 L78 58 Q78 62 74 62 L14 62 Q10 62 10 58 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="62" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="62" cy="62" r="6" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="44" cy="50" r="4" fill="#FF6B6B"/>
          </svg>`,
          'line-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M10 52 L26 42 L58 42 L78 48 L78 58 Q78 62 74 62 L14 62 Q10 62 10 58 Z" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="26" cy="62" r="6" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
            <circle cx="62" cy="62" r="6" fill="${color}" fill-opacity="0.7" stroke="${color}" stroke-width="1.5"/>
          </svg>`,
          'color-surface': (color) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
            <path d="M10 52 L26 42 L58 42 L78 48 L78 58 Q78 62 74 62 L14 62 Q10 62 10 58 Z" fill="${color}" stroke="${color}" stroke-width="1"/>
            <circle cx="26" cy="62" r="6" fill="#4b5563" stroke="#4b5563" stroke-width="1"/>
            <circle cx="62" cy="62" r="6" fill="#4b5563" stroke="#4b5563" stroke-width="1"/>
            <circle cx="44" cy="50" r="5" fill="white"/>
          </svg>`,
        }
      }
    ]
  }
};

// 风格设计规范 - 符合icon设计规范.md
const styleSpecs = {
  'simple-linear': {
    name: '简单线性',
    strokeWidth: 2,
    fill: 'none',
    features: ['纯线条', '无填充', '单色', '圆角设计'],
    target: 'Middle East (Islamic design)',
  },
  'color-linear': {
    name: '彩色线性',
    strokeWidth: 2,
    fill: 'none',
    features: ['多色线条', '点缀装饰', '细节丰富', '圆角设计', '最多3色'],
    target: 'Southeast Asia (Buddhist aesthetic)',
  },
  'line-surface': {
    name: '线面结合',
    strokeWidth: 1.5,
    fillOpacity: 0.7,
    features: ['线条+色块', '层次感', '平衡设计', '圆角设计'],
    target: 'Latin America (Vibrant aesthetic)',
  },
  'color-surface': {
    name: '彩色面性',
    strokeWidth: 1,
    fill: 'solid',
    features: ['实心填充', '白色装饰', '视觉强烈', '圆角设计'],
    target: 'Latin America (High-energy contexts)',
  },
};

// 颜色调整函数
function adjustColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00FF) + amount;
  let b = (num & 0x0000FF) + amount;

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// 匹配预设图标
function findPresetIcon(description) {
  const normalizedDesc = description.toLowerCase().trim();

  for (const [name, iconData] of Object.entries(presetIcons)) {
    if (iconData.keywords.some(kw => normalizedDesc.includes(kw.toLowerCase()) || kw.toLowerCase().includes(normalizedDesc))) {
      return { name, ...iconData };
    }
  }
  return null;
}

// AI生成图标（模拟 - 符合规范）
function generateAIIcon(description, styleId, color, region) {
  const baseShapes = {
    'simple-linear': (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
      <circle cx="44" cy="44" r="22" fill="none" stroke="${c}" stroke-width="2"/>
      <path d="M34 44 L44 34 L54 44 L44 54 Z" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'color-linear': (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
      <circle cx="44" cy="44" r="22" fill="none" stroke="${c}" stroke-width="2"/>
      <path d="M34 44 L44 34 L54 44 L44 54 Z" fill="none" stroke="#2E8B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="44" cy="44" r="4" fill="${c}"/>
    </svg>`,
    'line-surface': (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
      <circle cx="44" cy="44" r="22" fill="${c}" fill-opacity="0.7" stroke="${c}" stroke-width="1.5"/>
      <path d="M34 44 L44 34 L54 44 L44 54 Z" fill="${c}" fill-opacity="0.7"/>
    </svg>`,
    'color-surface': (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
      <circle cx="44" cy="44" r="22" fill="${c}" stroke="${c}" stroke-width="1"/>
      <path d="M34 44 L44 34 L54 44 L44 54 Z" fill="white"/>
    </svg>`,
  };

  return baseShapes[styleId](color);
}

// 主生成函数 - 返回3个不同造型的变体
export function generateIcons(description, region, styleId, color) {
  const preset = findPresetIcon(description);
  const icons = [];

  if (preset && preset.variants) {
    preset.variants.forEach((variant) => {
      const svgGenerator = variant.svg[styleId];
      icons.push({
        svg: svgGenerator(color),
        name: `${preset.name} - ${variant.name}`,
        isPreset: true,
      });
    });
  } else if (preset) {
    const svgGenerator = preset.svg?.[styleId];
    if (svgGenerator) {
      icons.push({
        svg: svgGenerator(color),
        name: `${preset.name} - 标准版`,
        isPreset: true,
      });
    }
  }

  if (icons.length === 0) {
    icons.push({
      svg: generateAIIcon(description, styleId, color, region),
      name: `${description} - AI生成版A`,
      isPreset: false,
    });
    icons.push({
      svg: generateAIIcon(description, styleId, adjustColor(color, 30), region),
      name: `${description} - AI生成版B`,
      isPreset: false,
    });
    icons.push({
      svg: generateAIIcon(description, styleId, adjustColor(color, -30), region),
      name: `${description} - AI生成版C`,
      isPreset: false,
    });
  }

  return icons;
}

export { styleSpecs, presetIcons };
