// https://jestjs.io/docs/en/api

function sum(a, b) {
  return a + b;
}

describe('sum(a, b)', () => {
  let a, b;

  beforeEach(() => {
    a = ~~(Math.random() * 10);
    b = ~~(Math.random() * 10);
  });

  test('sum with integers', () => {


    expect(sum(a, b)).toBe(a + b);
  });
});
