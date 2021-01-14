module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb',
    './rules/react-a11y',
    './rules/react',
  ].map(require.resolve),
  
  rules: { 
    // 基础的js规范覆盖
    // 文档：http://eslint.cn/docs/rules

    'block-scoped-var': 'warn', // 强制把变量的使用限制在其定义的作用域范围内
    'camelcase': 'warn', // 强制使用骆驼拼写法命名约定
    'consistent-return': 'warn', // 要求 return 语句要么总是指定返回的值，要么不指定
    'no-var': 'warn',  // 禁止采用var去定义变量
    'no-undef': 'warn', // 禁用未声明的变量
    'no-shadow': 'warn', // 禁止变量声明与外层作用域的变量同名
    'no-unused-vars': 'warn', // 声明未使用
    'no-underscore-dangle': 'off', // 禁止标识符中有悬空下划线
    'no-restricted-syntax': 'off', // 禁用特定的语法
    'no-plusplus': 'off', // 禁用一元操作符 ++ 和 --
    'no-param-reassign': 'off', // 禁止对 function 的参数进行重新赋值
    'no-else-return': 'warn', // else 中使用了return
    'no-continue': 'off', // 禁用 continue 语句
    'no-redeclare': 'warn', // 禁止多次声明同一变量
    'no-use-before-define': 'off', // 不能定义前使用
    'no-useless-catch': 'warn', // 禁止不必要的 catch 子句
    'no-useless-concat': 'warn', // 禁止不必要的字符串字面量或模板字面量的连接
    'no-new-object': 'warn', // 禁用 Object 的构造函数
    'no-new': 'warn',
    'vars-on-top': 'off', // 要求所有的 var 声明在它们所在的作用域顶部
    'object-shorthand': 'warn', // 要求或禁止对象字面量中方法和属性使用简写语法
    'eqeqeq': 'warn',   // 未使用 === 
    'prefer-template': 'warn', // 要求使用模板字面量而非字符串连接
    'prefer-promise-reject-errors': 'off', // 要求使用 Error 对象作为 Promise 拒绝的原因
  }
};