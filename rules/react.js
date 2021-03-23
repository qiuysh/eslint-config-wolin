/**
 * 覆盖默认的部分不适合的react规则
 */
module.exports = {
  plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {

    // 不允许didupdate生命周期setState操作
    'react/no-did-update-set-state': 'warn',

    // 不允许index索引当作列表的key
    'react/no-array-index-key': 'warn',

    // 防止函数式组件使用this
    'react/no-this-in-sfc': 'warn',

    'react/jsx-curly-newline': 'off',

    'react/jsx-first-prop-new-line': 'warn',

    'react/jsx-max-props-per-line': 'warn',

    'react/jsx-closing-bracket-location': 'warn',

    'react/jsx-one-expression-per-line': 'off',

    // 禁止JSX的props spreading
    'react/jsx-props-no-spreading': ['warn', {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
      exceptions: [],
    }],

    "react/jsx-filename-extension": ['warn', {
      "extensions": [
        ".js", 
        ".ts",
        ".jsx", 
        ".tsx"
      ]
    }],

  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
      'exact', // https://www.npmjs.com/package/prop-types-exact
      'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  }
};
