# 捏捏Icon - 落地页UI设计规范

## 项目概述

**项目名称**: 捏捏Icon (NieNie Icon)
**定位**: 跨境电商AI图标设计工具
**设计风格**: Claymorphism (黏土态) + Glassmorphism (玻璃态) 融合
**目标用户**: 跨境电商卖家、设计师、产品经理

---

## 一、色彩系统

### 1.1 主色板

```css
/* 主品牌色 - 紫色系 */
--primary-50:  #FAF5FF;   /* 最浅背景 */
--primary-100: #F4F1FA;   /* 页面背景 */
--primary-200: #E9D5FF;   /* 次级背景 */
--primary-300: #D8B4FE;   /* 悬停状态 */
--primary-400: #C4B5FD;   /* 渐变起点 */
--primary-500: #A78BFA;   /* 标准色 */
--primary-600: #8B5CF6;   /* 主要交互 */
--primary-700: #7C3AED;   /* 渐变终点 */
--primary-800: #6D28D9;   /* 深色强调 */
--primary-900: #5B21B6;   /* 最深色 */

/* 辅助色 - 蓝色系 */
--secondary-100: #DBEAFE;
--secondary-200: #BFDBFE;
--secondary-300: #93C5FD;
--secondary-400: #60A5FA;
--secondary-500: #3B82F6;
--secondary-600: #2563EB;

/* 强调色 - 橙色系 (用于CTA按钮) */
--accent-100: #FFEDD5;
--accent-200: #FED7AA;
--accent-300: #FDBA74;
--accent-400: #FB923C;
--accent-500: #F97316;   /* 主要CTA */
--accent-600: #EA580C;
```

### 1.2 中性色板

```css
/* 灰度系统 */
--gray-50:  #FAFAFA;   /* 卡片背景 */
--gray-100: #F5F5F5;   /* 次级背景 */
--gray-200: #E5E5E5;   /* 边框 */
--gray-300: #D4D4D4;   /* 分割线 */
--gray-400: #A3A3A3;   /* 禁用文本 */
--gray-500: #737373;   /* 辅助文本 */
--gray-600: #525252;   /* 正文文本 */
--gray-700: #404040;   /* 标题文本 */
--gray-800: #262626;   /* 主标题 */
--gray-900: #171717;   /* 最深文本 */
```

### 1.3 语义色

```css
/* 功能色 */
--success: #10B981;     /* 成功状态 */
--success-bg: #D1FAE5;
--warning: #F59E0B;     /* 警告状态 */
--warning-bg: #FEF3C7;
--error: #EF4444;       /* 错误状态 */
--error-bg: #FEE2E2;
--info: #3B82F6;        /* 信息提示 */
--info-bg: #DBEAFE;
```

### 1.4 渐变定义

```css
/* 主品牌渐变 */
--gradient-primary: linear-gradient(135deg, #C4B5FD 0%, #7C3AED 100%);

/* 柔和渐变 */
--gradient-soft: linear-gradient(135deg, #E9D5FF 0%, #C4B5FD 50%, #A78BFA 100%);

/* CTA渐变 */
--gradient-cta: linear-gradient(135deg, #FB923C 0%, #F97316 100%);

/* 背景渐变 */
--gradient-bg: linear-gradient(180deg, #FAF5FF 0%, #F4F1FA 100%);
```

---

## 二、字体系统

### 2.1 字体家族

```css
/* 主字体 - 中文优先 */
--font-primary: "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB",
                "Helvetica Neue", Arial, sans-serif;

/* 英文字体 */
--font-english: "Inter", "SF Pro Display", -apple-system,
                BlinkMacSystemFont, "Segoe UI", sans-serif;

/* 等宽字体 (代码) */
--font-mono: "JetBrains Mono", "Fira Code", "SF Mono", monospace;

/* 数字字体 */
--font-number: "SF Pro Display", "DIN Alternate", "Inter", sans-serif;
```

### 2.2 字体大小体系 (基于 16px 基准)

```css
/* 标题系统 */
--text-xs:    12px;    /* 0.75rem - 辅助信息 */
--text-sm:    14px;    /* 0.875rem - 小号文本 */
--text-base:  16px;    /* 1rem - 正文 */
--text-lg:    18px;    /* 1.125rem - 大号正文 */
--text-xl:    20px;    /* 1.25rem - 小标题 */
--text-2xl:   24px;    /* 1.5rem - 副标题 */
--text-3xl:   30px;    /* 1.875rem - 中标题 */
--text-4xl:   36px;    /* 2.25rem - 大标题 */
--text-5xl:   48px;    /* 3rem - 主标题 */
--text-6xl:   60px;    /* 3.75rem - 特大标题 */
--text-hero:  72px;    /* 4.5rem - Hero标题 */
```

### 2.3 行高体系

```css
--leading-none:    1;      /* 紧凑标题 */
--leading-tight:   1.25;   /* 标题 */
--leading-snug:    1.375;  /* 副标题 */
--leading-normal:  1.5;    /* 正文 */
--leading-relaxed: 1.625;  /* 长文本 */
--leading-loose:   2;      /* 极宽松 */
```

### 2.4 字重系统

```css
--font-normal:   400;  /* 正文 */
--font-medium:   500;  /* 强调文本 */
--font-semibold: 600;  /* 副标题 */
--font-bold:     700;  /* 标题 */
--font-extrabold:800;  /* 特大标题 */
```

### 2.5 字体样式应用

| 元素 | 字号 | 字重 | 行高 | 颜色 | 字间距 |
|------|------|------|------|------|--------|
| Hero标题 | 72px / 60px / 48px | 700 | 1.1 | --gray-900 | -0.02em |
| 主标题 H1 | 48px / 36px | 700 | 1.2 | --gray-800 | -0.01em |
| 副标题 H2 | 36px / 30px | 600 | 1.25 | --gray-700 | -0.01em |
| 小标题 H3 | 24px / 20px | 600 | 1.3 | --gray-700 | 0 |
| 正文 | 16px | 400 | 1.6 | --gray-600 | 0 |
| 辅助文本 | 14px | 400 | 1.5 | --gray-500 | 0 |
| 小字 | 12px | 400 | 1.5 | --gray-400 | 0.01em |
| 按钮文本 | 16px / 14px | 500 | 1.25 | --gray-900 / white | 0 |

---

## 三、间距系统

### 3.1 基础间距 (8px 基准网格)

```css
--space-0:   0;
--space-1:   4px;    /* 0.25rem - 微小间距 */
--space-2:   8px;    /* 0.5rem - 紧密间距 */
--space-3:   12px;   /* 0.75rem - 小间距 */
--space-4:   16px;   /* 1rem - 标准间距 */
--space-5:   20px;   /* 1.25rem - 中等间距 */
--space-6:   24px;   /* 1.5rem - 舒适间距 */
--space-8:   32px;   /* 2rem - 大间距 */
--space-10:  40px;   /* 2.5rem - 区块间距 */
--space-12:  48px;   /* 3rem - 大区块间距 */
--space-16:  64px;   /* 4rem - 章节间距 */
--space-20:  80px;   /* 5rem - 大章节间距 */
--space-24:  96px;   /* 6rem - 主要章节间距 */
--space-32:  128px;  /* 8rem - Hero区域 */
```

### 3.2 组件内间距

```css
/* 按钮内间距 */
--button-padding-sm:   8px 16px;    /* 小按钮 */
--button-padding-md:   12px 24px;   /* 中按钮 */
--button-padding-lg:   16px 32px;   /* 大按钮 */
--button-padding-xl:   20px 40px;   /* 超大按钮 */

/* 卡片内间距 */
--card-padding-sm:   16px;    /* 小卡片 */
--card-padding-md:   24px;    /* 中卡片 */
--card-padding-lg:   32px;    /* 大卡片 */
--card-padding-xl:   40px;    /* 超大卡片 */

/* 输入框内间距 */
--input-padding-sm:  8px 12px;
--input-padding-md:  12px 16px;
--input-padding-lg:  16px 20px;
```

### 3.3 容器宽度

```css
--container-sm:   640px;
--container-md:   768px;
--container-lg:   1024px;
--container-xl:   1280px;
--container-2xl:  1440px;
--container-max:  1440px;  /* 最大宽度 */
```

---

## 四、圆角系统

### 4.1 圆角值定义

```css
--radius-none:   0;
--radius-sm:     4px;    /* 小元素 */
--radius-md:     8px;    /* 按钮、输入框 */
--radius-lg:     12px;   /* 卡片 */
--radius-xl:     16px;   /* 大卡片 */
--radius-2xl:    20px;   /* 功能卡片 */
--radius-3xl:    24px;   /* 主要卡片 */
--radius-4xl:    32px;   /* Hero元素 */
--radius-5xl:    48px;   /* 大型黏土形状 */
--radius-full:   9999px; /* 圆形 */
```

### 4.2 黏土风格不规则圆角

```css
/* 大型黏土形状 */
--clay-radius-hero: 60px 80px 70px 90px;
--clay-radius-card: 40px 50px 45px 55px;
--clay-radius-btn:  20px 24px 22px 26px;

/* 软黏土效果 */
--clay-soft-radius: 30px 40px 35px 45px;
```

---

## 五、阴影系统

### 5.1 基础阴影

```css
/* 标准阴影 */
--shadow-xs:  0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm:  0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### 5.2 黏土风格阴影 (Claymorphism)

```css
/* 外阴影 */
--clay-shadow-sm:
  8px 8px 16px rgba(124, 58, 237, 0.15),
  -8px -8px 16px rgba(255, 255, 255, 0.8);

--clay-shadow-md:
  12px 12px 24px rgba(124, 58, 237, 0.2),
  -12px -12px 24px rgba(255, 255, 255, 0.9);

--clay-shadow-lg:
  20px 20px 40px rgba(124, 58, 237, 0.25),
  -20px -20px 40px rgba(255, 255, 255, 0.95);

--clay-shadow-xl:
  30px 30px 60px rgba(124, 58, 237, 0.3),
  -30px -30px 60px rgba(255, 255, 255, 1);

/* 内阴影 */
--clay-inset-sm:
  inset 4px 4px 8px rgba(124, 58, 237, 0.1),
  inset -4px -4px 8px rgba(255, 255, 255, 0.7);

--clay-inset-md:
  inset 8px 8px 16px rgba(124, 58, 237, 0.15),
  inset -8px -8px 16px rgba(255, 255, 255, 0.8);

--clay-inset-lg:
  inset 12px 12px 24px rgba(124, 58, 237, 0.2),
  inset -12px -12px 24px rgba(255, 255, 255, 0.85);
```

### 5.3 玻璃态阴影 (Glassmorphism)

```css
--glass-shadow:
  0 8px 32px rgba(124, 58, 237, 0.12),
  inset 0 1px 0 rgba(255, 255, 255, 0.4);

--glass-shadow-hover:
  0 12px 40px rgba(124, 58, 237, 0.18),
  inset 0 1px 0 rgba(255, 255, 255, 0.5);
```

---

## 六、模糊与透明度

### 6.1 模糊效果

```css
--blur-sm:   4px;
--blur-md:   8px;
--blur-lg:   16px;
--blur-xl:   24px;
--blur-2xl:  40px;
--blur-3xl:  64px;
```

### 6.2 透明度

```css
--opacity-0:    0;
--opacity-5:    0.05;
--opacity-10:   0.1;
--opacity-20:   0.2;
--opacity-30:   0.3;
--opacity-40:   0.4;
--opacity-50:   0.5;
--opacity-60:   0.6;
--opacity-70:   0.7;
--opacity-80:   0.8;
--opacity-90:   0.9;
--opacity-100:  1;
```

### 6.3 玻璃态背景

```css
/* 玻璃卡片背景 */
--glass-bg-light:
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

--glass-bg-medium:
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);

--glass-bg-dark:
  background: rgba(124, 58, 237, 0.15);
  backdrop-filter: blur(24px) saturate(120%);
  -webkit-backdrop-filter: blur(24px) saturate(120%);
```

---

## 七、动画系统

### 7.1 过渡时长

```css
--duration-75:    75ms;    /* 微交互 */
--duration-100:   100ms;   /* 快速反馈 */
--duration-150:   150ms;   /* 标准交互 */
--duration-200:   200ms;   /* 悬停效果 */
--duration-300:   300ms;   /* 展开收起 */
--duration-500:   500ms;   /* 页面过渡 */
--duration-700:   700ms;   /* 动画展示 */
--duration-1000:  1000ms;  /* 缓慢动画 */
```

### 7.2 缓动函数

```css
--ease-linear:      linear;
--ease-in:          cubic-bezier(0.4, 0, 1, 1);
--ease-out:         cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:      cubic-bezier(0.4, 0, 0.2, 1);

/* 弹性缓动 */
--ease-bounce:      cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-elastic:     cubic-bezier(0.68, -0.6, 0.32, 1.6);

/* 黏土缓动 */
--ease-clay:        cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-soft:        cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### 7.3 动画效果

```css
/* 淡入淡出 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 上浮淡入 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 黏土弹性 */
@keyframes clayBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
  75% { transform: scale(0.98); }
}

/* 柔和脉冲 */
@keyframes softPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

/* 浮动效果 */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* 渐变流动 */
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 7.4 交互动画应用

| 元素 | 动画类型 | 时长 | 缓动函数 |
|------|----------|------|----------|
| 按钮悬停 | scale + shadow | 200ms | ease-out |
| 卡片悬停 | translateY + shadow | 300ms | ease-clay |
| 模态框进入 | fadeIn + scale | 300ms | ease-bounce |
| 页面滚动 | fadeInUp | 500ms | ease-out |
| 图标加载 | softPulse | 2s | linear (infinite) |
| Hero元素 | float | 3s | ease-in-out (infinite) |

---

## 八、组件规范

### 8.1 Hero区域

#### Hero大型黏土形状

```css
.hero-clay-shape {
  /* 尺寸 */
  width: 580px;
  height: 580px;

  /* 背景 */
  background: linear-gradient(135deg, #C4B5FD 0%, #7C3AED 100%);

  /* 圆角 */
  border-radius: 60px 80px 70px 90px;

  /* 阴影 */
  box-shadow:
    30px 30px 60px rgba(124, 58, 237, 0.3),
    -30px -30px 60px rgba(255, 255, 255, 1),
    inset 8px 8px 16px rgba(255, 255, 255, 0.4),
    inset -8px -8px 16px rgba(124, 58, 237, 0.2);

  /* 动画 */
  animation: float 6s ease-in-out infinite;
}
```

#### Hero标题

```css
.hero-title {
  /* 字体 */
  font-family: var(--font-primary);
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;

  /* 颜色 */
  color: var(--gray-900);

  /* 文字阴影 */
  text-shadow: 2px 4px 8px rgba(124, 58, 237, 0.1);
}

/* 渐变文字 */
.hero-title-gradient {
  background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### Hero副标题

```css
.hero-subtitle {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--gray-600);
  margin-top: 24px;
  max-width: 640px;
}
```

#### Hero CTA按钮组

```css
.hero-cta-group {
  display: flex;
  gap: 16px;
  margin-top: 48px;
}

/* 主CTA按钮 */
.btn-primary-cta {
  padding: 20px 48px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #FB923C 0%, #F97316 100%);
  border-radius: 16px;
  box-shadow:
    0 8px 24px rgba(249, 115, 22, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 200ms ease-out;
}

.btn-primary-cta:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 32px rgba(249, 115, 22, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* 次级CTA按钮 */
.btn-secondary-cta {
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-700);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 2px solid var(--primary-300);
  border-radius: 16px;
  transition: all 200ms ease-out;
}

.btn-secondary-cta:hover {
  background: white;
  border-color: var(--primary-400);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15);
}
```

### 8.2 功能卡片

```css
.feature-card {
  /* 布局 */
  width: 100%;
  max-width: 380px;
  padding: 32px;
  margin-bottom: 24px;

  /* 背景 */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  /* 边框 */
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 24px;

  /* 阴影 */
  box-shadow:
    0 8px 32px rgba(124, 58, 237, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);

  /* 过渡 */
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(124, 58, 237, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.85);
}

/* 卡片图标容器 */
.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  margin-bottom: 24px;

  /* 黏土风格 */
  background: linear-gradient(135deg, #E9D5FF 0%, #C4B5FD 100%);
  border-radius: 20px;
  box-shadow:
    8px 8px 16px rgba(124, 58, 237, 0.15),
    -8px -8px 16px rgba(255, 255, 255, 0.8),
    inset 4px 4px 8px rgba(255, 255, 255, 0.3),
    inset -4px -4px 8px rgba(124, 58, 237, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
}

/* 卡片图标 */
.feature-icon {
  width: 40px;
  height: 40px;
  color: var(--primary-700);
}

/* 卡片标题 */
.feature-card-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--gray-800);
  margin-bottom: 12px;
}

/* 卡片描述 */
.feature-card-desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-600);
}
```

### 8.3 按钮系统

#### 主要按钮

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: white;

  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
  border: none;
  border-radius: 12px;

  box-shadow:
    0 4px 16px rgba(124, 58, 237, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  cursor: pointer;
  transition: all 200ms ease-out;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(124, 58, 237, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow:
    0 2px 8px rgba(124, 58, 237, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
```

#### 次要按钮

```css
.btn-secondary {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-700);

  background: white;
  border: 2px solid var(--primary-300);
  border-radius: 12px;

  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);

  transition: all 200ms ease-out;
}

.btn-secondary:hover {
  border-color: var(--primary-500);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.15);
  transform: translateY(-1px);
}
```

#### 幽灵按钮

```css
.btn-ghost {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-600);

  background: transparent;
  border: none;
  border-radius: 12px;

  transition: all 200ms ease-out;
}

.btn-ghost:hover {
  background: rgba(124, 58, 237, 0.1);
  color: var(--primary-700);
}
```

### 8.4 输入框

```css
.input-field {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--gray-800);

  background: rgba(255, 255, 255, 0.9);
  border: 2px solid var(--gray-200);
  border-radius: 12px;

  transition: all 200ms ease-out;
}

.input-field::placeholder {
  color: var(--gray-400);
}

.input-field:hover {
  border-color: var(--gray-300);
}

.input-field:focus {
  outline: none;
  border-color: var(--primary-500);
  background: white;
  box-shadow:
    0 0 0 4px rgba(124, 58, 237, 0.1),
    0 4px 12px rgba(124, 58, 237, 0.1);
}
```

### 8.5 导航栏

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  height: 80px;
  padding: 0 48px;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.08);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.navbar-logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-700);
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-logo-icon {
  width: 40px;
  height: 40px;
}

/* 导航链接 */
.navbar-links {
  display: flex;
  gap: 32px;
}

.navbar-link {
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-600);
  text-decoration: none;
  transition: color 200ms ease-out;
  position: relative;
}

.navbar-link:hover {
  color: var(--primary-600);
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-500);
  transform: scaleX(0);
  transition: transform 200ms ease-out;
}

.navbar-link:hover::after {
  transform: scaleX(1);
}
```

---

## 九、响应式设计

### 9.1 断点系统

```css
/* Mobile First */
--breakpoint-sm:   640px;   /* 小屏手机 */
--breakpoint-md:   768px;   /* 平板竖屏 */
--breakpoint-lg:   1024px;  /* 平板横屏/小笔记本 */
--breakpoint-xl:   1280px;  /* 桌面 */
--breakpoint-2xl:  1536px;  /* 大桌面 */
```

### 9.2 响应式字体

```css
/* Hero标题 */
.hero-title {
  font-size: 48px;  /* 移动端 */
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 60px;  /* 平板 */
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 72px;  /* 桌面 */
  }
}

/* 正文 */
body {
  font-size: 14px;  /* 移动端 */
}

@media (min-width: 768px) {
  body {
    font-size: 16px;  /* 平板及以上 */
  }
}
```

### 9.3 响应式间距

```css
/* Section间距 */
.section {
  padding: 48px 16px;  /* 移动端 */
}

@media (min-width: 768px) {
  .section {
    padding: 80px 32px;  /* 平板 */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 96px 48px;  /* 桌面 */
  }
}

@media (min-width: 1280px) {
  .section {
    padding: 128px 64px;  /* 大桌面 */
  }
}
```

### 9.4 响应式网格

```css
/* 功能卡片网格 */
.feature-grid {
  display: grid;
  grid-template-columns: 1fr;  /* 移动端单列 */
  gap: 24px;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);  /* 平板双列 */
    gap: 32px;
    padding: 0 32px;
  }
}

@media (min-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);  /* 桌面三列 */
    gap: 40px;
    padding: 0 48px;
  }
}
```

### 9.5 Hero响应式

```css
/* 移动端 */
.hero {
  padding: 120px 20px 80px;
  text-align: center;
}

.hero-clay-shape {
  width: 280px;
  height: 280px;
  margin: 0 auto 48px;
}

.hero-title {
  font-size: 36px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 18px;
  padding: 0 20px;
}

.hero-cta-group {
  flex-direction: column;
  align-items: center;
}

/* 平板 */
@media (min-width: 768px) {
  .hero {
    padding: 140px 40px 100px;
  }

  .hero-clay-shape {
    width: 400px;
    height: 400px;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-subtitle {
    font-size: 20px;
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 120px 64px;
    text-align: left;
  }

  .hero-content {
    max-width: 600px;
  }

  .hero-clay-shape {
    width: 480px;
    height: 480px;
    margin: 0;
  }

  .hero-title {
    font-size: 60px;
  }

  .hero-cta-group {
    flex-direction: row;
    justify-content: flex-start;
  }
}

/* 大桌面 */
@media (min-width: 1280px) {
  .hero {
    padding: 140px 80px;
  }

  .hero-clay-shape {
    width: 580px;
    height: 580px;
  }

  .hero-title {
    font-size: 72px;
  }

  .hero-subtitle {
    font-size: 24px;
  }
}
```

---

## 十、页面布局规范

### 10.1 页面结构

```
+------------------------------------------+
|           导航栏 (80px height)            |
+------------------------------------------+
|                                          |
|              Hero 区域                    |
|         (120-140px padding)              |
|                                          |
+------------------------------------------+
|                                          |
|           功能介绍区域                    |
|         (96-128px padding)               |
|                                          |
+------------------------------------------+
|                                          |
|           产品展示区域                    |
|         (96-128px padding)               |
|                                          |
+------------------------------------------+
|                                          |
|           用户案例区域                    |
|         (96-128px padding)               |
|                                          |
+------------------------------------------+
|                                          |
|           定价区域                        |
|         (96-128px padding)               |
|                                          |
+------------------------------------------+
|                                          |
|           CTA区域                         |
|         (96-128px padding)               |
|                                          |
+------------------------------------------+
|                                          |
|           页脚                            |
|         (80-100px padding)               |
|                                          |
+------------------------------------------+
```

### 10.2 容器规范

```css
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;  /* 移动端 */
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;  /* 平板 */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 48px;  /* 桌面 */
  }
}

@media (min-width: 1280px) {
  .container {
    padding: 0 64px;  /* 大桌面 */
  }
}
```

---

## 十一、图标规范

### 11.1 图标尺寸

```css
--icon-xs:   12px;
--icon-sm:   16px;
--icon-md:   20px;
--icon-lg:   24px;
--icon-xl:   32px;
--icon-2xl:  40px;
--icon-3xl:  48px;
--icon-4xl:  64px;
```

### 11.2 黏土风格图标样式

```css
.clay-icon {
  /* 基础样式 */
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #E9D5FF 0%, #C4B5FD 100%);
  border-radius: 16px;

  /* 黏土阴影 */
  box-shadow:
    6px 6px 12px rgba(124, 58, 237, 0.15),
    -6px -6px 12px rgba(255, 255, 255, 0.8),
    inset 3px 3px 6px rgba(255, 255, 255, 0.3),
    inset -3px -3px 6px rgba(124, 58, 237, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 300ms ease-clay;
}

.clay-icon:hover {
  transform: scale(1.05);
  box-shadow:
    8px 8px 16px rgba(124, 58, 237, 0.2),
    -8px -8px 16px rgba(255, 255, 255, 0.9),
    inset 4px 4px 8px rgba(255, 255, 255, 0.4),
    inset -4px -4px 8px rgba(124, 58, 237, 0.15);
}
```

---

## 十二、无障碍设计

### 12.1 色彩对比度

- 正文文本 (16px+): 最小对比度 4.5:1
- 大号文本 (18px+ / 14px 粗体): 最小对比度 3:1
- 图标和图形元素: 最小对比度 3:1

### 12.2 焦点状态

```css
/* 标准焦点环 */
:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}

/* 按钮焦点 */
.btn:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 4px;
  box-shadow:
    0 0 0 4px rgba(124, 58, 237, 0.2),
    0 4px 16px rgba(124, 58, 237, 0.3);
}

/* 链接焦点 */
a:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 4px;
  border-radius: 4px;
}
```

### 12.3 触摸目标

- 最小触摸目标尺寸: 44x44px
- 相邻可点击元素最小间距: 8px

```css
/* 移动端按钮 */
@media (max-width: 767px) {
  .btn {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 20px;
  }
}
```

### 12.4 动画减少

```css
/* 尊重用户偏好 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 十三、性能优化建议

### 13.1 图片优化

- 格式: WebP (优先), JPEG 2000, PNG
- 响应式图片: 使用 `srcset` 和 `sizes` 属性
- 懒加载: 添加 `loading="lazy"` 属性
- 最大文件大小:
  - Hero图片: < 200KB
  - 缩略图: < 50KB
  - 图标: < 10KB

### 13.2 CSS优化

- 使用 CSS 变量减少重复
- 关键CSS内联在 `<head>` 中
- 非关键CSS异步加载
- 避免过度使用 `backdrop-filter` (性能消耗大)

### 13.3 动画性能

```css
/* 使用 transform 和 opacity (GPU加速) */
.performant-animation {
  will-change: transform, opacity;
  transform: translateZ(0);  /* 强制GPU加速 */
}

/* 避免动画以下属性 (触发重排) */
/* - width, height */
/* - top, left, right, bottom */
/* - margin, padding */
/* - font-size */
```

---

## 十四、设计交付清单

### 14.1 必备交付物

- [ ] 色彩变量表 (CSS变量格式)
- [ ] 字体规范文档
- [ ] 间距系统文档
- [ ] 组件库 (Figma + 代码)
- [ ] 响应式布局指南
- [ ] 图标资源 (SVG格式)
- [ ] 交互原型 (Figma)
- [ ] 动画演示 (GIF/视频)

### 14.2 开发协作

- [ ] CSS变量文件 (`design-tokens.css`)
- [ ] Tailwind配置文件 (`tailwind.config.js`)
- [ ] 组件样式文件
- [ ] 响应式断点配置
- [ ] Figma Code Connect 映射

---

## 十五、文件导出

### 15.1 设计资源

```
/design-assets
  /icons
    - icon-set.svg (所有图标)
    - icon-*.svg (单独图标)
  /images
    - hero-image.webp
    - feature-*.webp
  /fonts
    - Inter-*.woff2
    - PingFang-SC-*.ttf
```

### 15.2 代码资源

```
/src
  /styles
    - design-tokens.css
    - animations.css
    - components.css
  /config
    - tailwind.config.js
    - theme.config.js
```

---

## 附录: 快速参考

### A. 常用颜色

| 用途 | 颜色值 | CSS变量 |
|------|--------|---------|
| 页面背景 | #F4F1FA | --primary-100 |
| 主品牌色 | #7C3AED | --primary-700 |
| CTA按钮 | #F97316 | --accent-500 |
| 主文本 | #262626 | --gray-800 |
| 辅助文本 | #737373 | --gray-500 |

### B. 常用间距

| 用途 | 数值 | CSS变量 |
|------|------|---------|
| 组件内部 | 16px | --space-4 |
| 元素之间 | 24px | --space-6 |
| 卡片间距 | 32px | --space-8 |
| 区块间距 | 64px | --space-16 |
| 章节间距 | 96px | --space-24 |

### C. 常用圆角

| 用途 | 数值 | CSS变量 |
|------|------|---------|
| 按钮/输入框 | 12px | --radius-lg |
| 卡片 | 24px | --radius-3xl |
| 大型形状 | 32px | --radius-4xl |
| Hero黏土 | 不规则 | --clay-radius-hero |

---

**设计师**: UI Designer
**版本**: v1.0
**最后更新**: 2026-05-04
**状态**: 待审核
