# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## 5. Tailwind CSS 规范

**JIT 编译器无法识别动态拼接的类名，会导致样式缺失。**

### 禁止的写法

```jsx
// ❌ 模板字符串拼接 - JIT 无法识别
<div className={`bg-${color}-500`} />
<div className={`bg-gradient-to-br ${style.gradient}`} />

// ❌ 变量形式的类名字符串
const gradient = 'from-violet-400 to-violet-600';
<div className={`bg-gradient-to-br ${gradient}`} />
```

### 正确的写法

```jsx
// ✅ 内联样式 - 用于渐变色、动态颜色
<div style={{ background: 'linear-gradient(to bottom right, #A78BFA, #7C3AED)' }} />
<div style={{ backgroundColor: color }} />

// ✅ 三元表达式 - 用于二选一场景
<div className={isActive ? 'bg-violet-500' : 'bg-gray-300'} />

// ✅ 完整类名映射对象
const gradients = {
  violet: 'linear-gradient(to bottom right, #A78BFA, #7C3AED)',
  pink: 'linear-gradient(to bottom right, #F472B6, #DB2777)',
};
<div style={{ background: gradients[type] }} />
```

### 快速诊断

**症状**：开发环境正常，浏览器中某些样式（特别是颜色、渐变）不显示

**原因**：使用了模板字符串或变量拼接 Tailwind 类名

**解决**：将动态类名改为内联 style

---

**这条规范生效时**：动态样式用内联 style，不再出现"样式在编辑器正常但浏览器缺失"的问题。
