import test from 'tape';
import {
  CLIEngine,
  ESLint
} from 'eslint';
import eslintrc from '..';
import reactRules from '../rules/react';
import reactA11yRules from '../rules/react-a11y';

// 创建eslint规则
const cli = new(CLIEngine || ESLint)({
  useEslintrc: false,
  baseConfig: eslintrc,

  rules: {
    
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true
    }],
   
  },
});

function lint(text) {
  const linter = CLIEngine ? cli.executeOnText(text) : cli.lintText(text);
  return linter.results[0];
}

function wrapComponent(body) {
  return `\
    import React from 'react';

    export default class MyComponent extends React.Component {
    /* eslint no-empty-function: 0, class-methods-use-this: 0 */
    ${body}}
  `;
}

test('validate react prop order', (t) => {
  t.test('make sure our eslintrc has React and JSX linting dependencies', (t) => {
    t.plan(2);
    t.deepEqual(reactRules.plugins, ['react']);
    t.deepEqual(reactA11yRules.plugins, ['jsx-a11y', 'react']);
  });

  t.test('passes a good component', (t) => {
    t.plan(3);
    const result = lint(wrapComponent(`
      componentDidMount() {}
      setFoo() {}
      getFoo() {}
      setBar() {}
      someMethod() {}
      renderDogs() {}
      render() { return <div />; }
    `));

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('order: when random method is first', (t) => {
    t.plan(2);
    const result = lint(wrapComponent(`
      someMethod() {}
      componentDidMount() {}
      setFoo() {}
      getFoo() {}
      setBar() {}
      renderDogs() {}
      render() { return <div />; }
    `));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });

  t.test('order: when random method after lifecycle methods', (t) => {
    t.plan(2);
    const result = lint(wrapComponent(`
      componentDidMount() {}
      someMethod() {}
      setFoo() {}
      getFoo() {}
      setBar() {}
      renderDogs() {}
      render() { return <div />; }
    `));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });
});