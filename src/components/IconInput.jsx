import React, { useState } from 'react';

const IconInput = ({ value, onChange }) => {
  const suggestions = ['鞋子', '裙子', '手机', '耳机', '手表', '购物车'];

  return (
    <div>
      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="输入图标名称，如：鞋子、包包、耳机..."
          className="clay-input"
        />
        {/* Character Count */}
        {value && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-clay-muted">
            {value.length}/20
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onChange(suggestion)}
            className="clay-pill"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconInput;
