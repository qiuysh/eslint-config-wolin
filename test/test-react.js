import test from 'tape';
import {
  CLIEngine,
  ESLint
} from 'eslint';
import eslintrc from '..';

// 创建eslint规则
const cli = new(CLIEngine || ESLint)({
  useEslintrc: false,
  baseConfig: eslintrc,
});

function lint(text) {
  const linter = CLIEngine ? cli.executeOnText(text) : cli.lintText(text);
  return linter.results[0];
}

function wrapComponent(body) {
  return `\
    import React from 'react';
    export default class myComponent extends React.Component {
    ${body}}
  `;
}

test('验证react的eslint规范', (t) => {
  
  t.test('验证组件', (t) => {
    t.plan(2);
    const result = lint(wrapComponent(`
      componentDidMount() {}
      render() { return <div />; }
    `));
    t.notOk(result.warningCount, 'no warnings');
  });

});