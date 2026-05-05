# Clay Icons / 捏捏Icon - 品牌识别系统

## 品牌定位

### 品牌宗旨 (Purpose)
让跨境电商图标设计变得简单、有趣、专业，帮助中国品牌在全球市场建立统一的视觉语言。

### 品牌愿景 (Vision)
成为跨境电商领域最受信赖的AI图标设计工具，让每个卖家都能轻松拥有专业级的品牌视觉资产。

### 品牌使命 (Mission)
通过AI技术降低设计门槛，为跨境电商从业者提供文化适配、风格多样的图标解决方案。

### 品牌价值观 (Values)
1. **简单易用**: 像捏黏土一样直观，让设计不再是专业门槛
2. **文化敏感**: 理解不同市场的审美偏好，帮助品牌全球化
3. **创意无限**: 提供丰富的风格选择，激发设计灵感
4. **专业可靠**: 每个图标都经过精心优化，确保输出质量

### 品牌个性 (Personality)
- **亲和力**: 圆润、温暖、易于接近
- **创意感**: 充满想象力、不拘一格
- **专业度**: 懂设计、懂电商、懂用户
- **科技感**: AI驱动、智能推荐

---

## 视觉识别系统

### 1. 色彩系统

#### 主色调 (Primary Colors)
```
紫色系 - 代表创意与科技感

Primary Violet    #8B5CF6    RGB(139, 92, 246)
Primary Light     #A78BFA    RGB(167, 139, 250)
Primary Dark      #7C3AED    RGB(124, 58, 237)
Primary Deep      #6D28D9    RGB(109, 40, 217)
Primary Lighter   #C4B5FD    RGB(196, 181, 253)
```

#### 辅助色 (Secondary Colors)
```
粉色系 - 活力、亲和
Pink 400          #F472B6    RGB(244, 114, 182)
Pink 500          #EC4899    RGB(236, 72, 153)

蓝色系 - 信任、专业
Blue 400          #60A5FA    RGB(96, 165, 250)
Blue 300          #93C5FD    RGB(147, 197, 253)

绿色系 - 成功、确认
Green 400         #4ADE80    RGB(74, 222, 128)
Green 300         #86EFAC    RGB(134, 239, 172)

琥珀色系 - 警示、提示
Amber 400         #FBBF24    RGB(251, 191, 36)
```

#### 中性色 (Neutral Colors)
```
背景色系
Background        #F4F1FA    主背景色
Card Background   #EFEBF5    卡片背景色
Input Background  #EFEBF5    输入框背景色

文字色系
Text Primary      #332F3A    主要文字
Text Secondary    #635F69    次要文字
Text Tertiary     #6B7280    描述性文字
Text Muted        #9CA3AF    弱化文字
Text Inverted     #FFFFFF    反色文字
```

#### 渐变组合 (Gradients)
```css
/* 主品牌渐变 - 用于按钮、强调元素 */
--gradient-brand: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 25%, #8b5cf6 50%, #7c3aed 75%, #6d28d9 100%);

/* 按钮渐变 */
--gradient-button: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);

/* 卡片光泽渐变 */
--gradient-card-shine: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(244,241,250,0.8));

/* 功能卡片图标渐变 */
--gradient-icon-violet: linear-gradient(to bottom right, #A78BFA, #7C3AED);
--gradient-icon-pink: linear-gradient(to bottom right, #F472B6, #EC4899);
--gradient-icon-blue: linear-gradient(to bottom right, #60A5FA, #3B82F6);
--gradient-icon-green: linear-gradient(to bottom right, #4ADE80, #22C55E);
```

### 2. 字体系统

#### 主字体
```
英文标题: Quicksand (Google Fonts)
- 字重: 500 (Medium), 600 (SemiBold), 700 (Bold)
- 用于: 主标题、按钮文字、英文标签

中文标题: 阿里妈妈方圆体VF (AlimamaFangYuanTiVF)
- 用于: 中文标题、描述文字、UI文字
- 圆润风格，与Claymorphism设计语言契合

正文/代码: Inter
- 用于: 正文、代码片段、数据展示
```

#### 字体层级
```css
/* Hero 区域 */
.hero-title {
  font-family: 'Quicksand', 'AlimamaFangYuanTiVF', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);  /* 48px - 80px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-family: 'AlimamaFangYuanTiVF', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);  /* 24px - 40px */
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* 区域标题 */
.section-title {
  font-family: 'Quicksand', 'AlimamaFangYuanTiVF', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.25rem);  /* 24px - 36px */
  font-weight: 700;
  line-height: 1.2;
}

/* 卡片标题 */
.card-title {
  font-family: 'Quicksand', 'AlimamaFangYuanTiVF', sans-serif;
  font-size: 1.125rem;  /* 18px */
  font-weight: 600;
  line-height: 1.3;
}

/* 正文 */
.body-large {
  font-family: 'AlimamaFangYuanTiVF', 'Inter', sans-serif;
  font-size: 1.125rem;  /* 18px */
  line-height: 1.75;
}

.body-regular {
  font-family: 'AlimamaFangYuanTiVF', 'Inter', sans-serif;
  font-size: 1rem;  /* 16px */
  line-height: 1.6;
}

/* 标签/小字 */
.label {
  font-family: 'Quicksand', 'AlimamaFangYuanTiVF', sans-serif;
  font-size: 0.875rem;  /* 14px */
  font-weight: 600;
  letter-spacing: 0.025em;
}

.caption {
  font-family: 'AlimamaFangYuanTiVF', sans-serif;
  font-size: 0.75rem;  /* 12px */
  line-height: 1.5;
}
```

### 3. 间距系统

```css
:root {
  /* 基础间距单位 */
  --space-unit: 0.25rem;  /* 4px */

  /* 间距变量 */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */

  /* 区域间距 */
  --section-gap: 6rem;       /* 区域之间的垂直间距 */
  --section-padding: 4rem;   /* 区域内部上下padding */

  /* 卡片间距 */
  --card-gap: 1.5rem;        /* 卡片之间的间距 */
  --card-padding: 1.5rem;    /* 卡片内部padding */

  /* 元素间距 */
  --element-gap: 1rem;       /* 元素之间的间距 */
}
```

### 4. 圆角系统

```css
:root {
  /* 圆角尺寸 */
  --radius-sm: 0.5rem;     /* 8px - 小型元素 */
  --radius-md: 0.75rem;    /* 12px - 中型元素 */
  --radius-lg: 1rem;       /* 16px - 大型元素 */
  --radius-xl: 1.25rem;    /* 20px - 按钮 */
  --radius-2xl: 1.5rem;    /* 24px - 卡片 */
  --radius-3xl: 2rem;      /* 32px - 大卡片 */
  --radius-4xl: 2.5rem;    /* 40px - Hero卡片 */

  /* 特殊形状 */
  --radius-pill: 9999px;   /* 胶囊形 */
  --radius-full: 50%;      /* 圆形 */
}
```

### 5. 阴影系统 (Claymorphism 专用)

```css
:root {
  /* 卡片阴影 - 默认状态 */
  --shadow-card:
    16px 16px 32px rgba(160, 150, 180, 0.2),
    -10px -10px 24px rgba(255, 255, 255, 0.9),
    inset 6px 6px 12px rgba(139, 92, 246, 0.03),
    inset -6px -6px 12px rgba(255, 255, 255, 1);

  /* 卡片阴影 - hover状态 */
  --shadow-card-hover:
    20px 20px 40px rgba(160, 150, 180, 0.25),
    -14px -14px 32px rgba(255, 255, 255, 1),
    inset 8px 8px 16px rgba(139, 92, 246, 0.05),
    inset -8px -8px 16px rgba(255, 255, 255, 1);

  /* 按钮阴影 */
  --shadow-button:
    12px 12px 24px rgba(139, 92, 246, 0.3),
    -8px -8px 16px rgba(255, 255, 255, 0.4),
    inset 4px 4px 8px rgba(255, 255, 255, 0.4),
    inset -4px -4px 8px rgba(0, 0, 0, 0.1);

  /* 输入框阴影 */
  --shadow-input:
    inset 6px 6px 12px #d9d4e3,
    inset -6px -6px 12px #ffffff;

  /* 小元素阴影 */
  --shadow-sm:
    6px 6px 12px rgba(160, 150, 180, 0.1),
    -4px -4px 8px rgba(255, 255, 255, 0.7);

  /* 大元素阴影 */
  --shadow-lg:
    24px 24px 48px rgba(160, 150, 180, 0.3),
    -16px -16px 32px rgba(255, 255, 255, 0.9),
    inset 8px 8px 16px rgba(255, 255, 255, 0.5),
    inset -8px -8px 16px rgba(0, 0, 0, 0.03);
}
```

---

## 组件设计规范

### 1. 卡片组件 (Clay Card)

```jsx
// 基础卡片样式
const clayCardStyles = {
  base: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: `
      16px 16px 32px rgba(160, 150, 180, 0.2),
      -10px -10px 24px rgba(255, 255, 255, 0.9),
      inset 6px 6px 12px rgba(139, 92, 246, 0.03),
      inset -6px -6px 12px rgba(255, 255, 255, 1)
    `,
    transition: 'all 0.5s ease'
  },
  hover: {
    transform: 'translateY(-8px)',
    boxShadow: `
      20px 20px 40px rgba(160, 150, 180, 0.25),
      -14px -14px 32px rgba(255, 255, 255, 1),
      inset 8px 8px 16px rgba(139, 92, 246, 0.05),
      inset -8px -8px 16px rgba(255, 255, 255, 1)
    `
  }
};
```

### 2. 按钮组件 (Clay Button)

```jsx
// 主要按钮样式
const clayButtonStyles = {
  primary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 28px',
    fontFamily: "'Quicksand', 'AlimamaFangYuanTiVF', sans-serif",
    fontWeight: 700,
    fontSize: '15px',
    letterSpacing: '0.025em',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    background: 'linear-gradient(to bottom right, #A78BFA, #7C3AED)',
    boxShadow: `
      12px 12px 24px rgba(139, 92, 246, 0.3),
      -8px -8px 16px rgba(255, 255, 255, 0.4),
      inset 4px 4px 8px rgba(255, 255, 255, 0.4),
      inset -4px -4px 8px rgba(0, 0, 0, 0.1)
    `,
    transition: 'all 0.2s ease'
  },
  secondary: {
    background: 'rgba(255, 255, 255, 0.8)',
    color: '#332F3A',
    boxShadow: `
      10px 10px 20px rgba(160, 150, 180, 0.15),
      -8px -8px 16px rgba(255, 255, 255, 0.8),
      inset 3px 3px 6px rgba(255, 255, 255, 0.6),
      inset -3px -3px 6px rgba(0, 0, 0, 0.05)
    `
  },
  hover: {
    transform: 'translateY(-4px)',
    boxShadow: `
      16px 16px 32px rgba(139, 92, 246, 0.35),
      -10px -10px 20px rgba(255, 255, 255, 0.5),
      inset 5px 5px 10px rgba(255, 255, 255, 0.5),
      inset -5px -5px 10px rgba(0, 0, 0, 0.1)
    `
  },
  active: {
    transform: 'scale(0.92)',
    boxShadow: `
      inset 10px 10px 20px #d9d4e3,
      inset -10px -10px 20px #ffffff
    `
  }
};
```

### 3. 输入框组件 (Clay Input)

```jsx
const clayInputStyles = {
  base: {
    width: '100%',
    padding: '16px 24px',
    fontFamily: "'Inter', 'Noto Sans SC', sans-serif",
    fontSize: '16px',
    color: '#332F3A',
    background: '#EFEBF5',
    border: 'none',
    borderRadius: '20px',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxShadow: `
      inset 6px 6px 12px #d9d4e3,
      inset -6px -6px 12px #ffffff
    `
  },
  focus: {
    background: 'white',
    boxShadow: `
      0 0 0 4px rgba(124, 58, 237, 0.2),
      inset 2px 2px 4px rgba(0, 0, 0, 0.05),
      inset -2px -2px 4px rgba(255, 255, 255, 0.8)
    `
  }
};
```

---

## 动画系统

### 1. 核心动画定义

```css
/* 黏土形状变形动画 */
@keyframes clay-morph {
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    transform: translateY(-50%) rotate(0deg);
  }
  25% {
    border-radius: 50% 50% 60% 40% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 60% 40% 50% 50% / 60% 40% 60% 40%;
    transform: translateY(-50%) rotate(3deg);
  }
  75% {
    border-radius: 50% 60% 40% 60% / 40% 50% 50% 60%;
  }
}

/* 柔和浮动动画 */
@keyframes clay-float-soft {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

/* 延迟浮动动画 */
@keyframes clay-float-delayed {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(-3deg);
  }
}

/* 淡入上升动画 */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 缩放进入动画 */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 呼吸效果 */
@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

### 2. 动画时长规范

```css
:root {
  /* 动画时长 */
  --duration-fast: 0.15s;     /* 快速交互 */
  --duration-normal: 0.3s;    /* 常规过渡 */
  --duration-slow: 0.5s;      /* 慢速过渡 */
  --duration-slower: 0.8s;    /* 入场动画 */
  --duration-slowest: 1s;     /* 大型元素 */

  /* 缓动函数 */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 响应式设计规范

### 1. 断点定义

```css
:root {
  /* 断点 */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### 2. 响应式调整

| 元素 | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|------|-----------------|---------------------|-------------------|
| Hero标题 | 48px | 56-64px | 72-80px |
| 区块padding | 48px | 64px | 96px |
| 卡片网格 | 1列 | 2列 | 4列 |
| 装饰形状 | 缩小50%, 降低透明度 | 缩小25%, 标准透明度 | 原始大小 |
| 导航栏 | 汉堡菜单 | 汉堡菜单/完整导航 | 完整导航 |

---

## 使用指南

### 设计原则

1. **一致性优先**: 所有元素遵循统一的视觉语言
2. **层次分明**: 通过阴影、大小、颜色建立清晰的信息层级
3. **动效克制**: 动画增强体验，而非分散注意力
4. **无障碍访问**: 确保足够的对比度和可交互区域

### 禁止事项

1. 不要在黏土风格元素上使用锐利的边角
2. 不要过度使用渐变，保持视觉平衡
3. 不要忽视动画的性能影响
4. 不要在小尺寸元素上使用复杂的阴影效果

---

**品牌守护者**: Clay Icons 设计团队
**最后更新**: 2024年
**版本**: 1.0
