import { add } from './math';

test('3 + 5 should equal 8', () => {
  const res = add(3, 5);
  expect(res).toEqual(8);
});
