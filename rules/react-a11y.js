/**
 * 覆盖默认的部分不适合的JSX规则
 */
module.exports = {
  plugins: [
    'jsx-a11y',
    'react'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {

    'jsx-a11y/mouse-events-have-key-events': 'warn',

    'jsx-a11y/click-events-have-key-events': 'warn',

    // 确保<a></a>标签有效
    'jsx-a11y/anchor-is-valid': ['warn', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
  },
};