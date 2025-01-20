import { uuid } from './uuid';

describe('uuid', () => {
  test('Should return a N-character string', () => {
    // given
    const n = 1 + Math.floor(Math.random() * 32);

    // when
    const result = uuid(n);

    // then
    expect(result.length).toBe(n);
  });
});
