import test from 'tape';

test('时间测试', (t) => {
  t.plan(2);
  var start = Date.now();
  setTimeout(function () {
    t.equal(Date.now() - start, 100);
  }, 100);
});