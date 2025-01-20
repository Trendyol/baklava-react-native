export function uuid(digits: number) {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
  let id = [];
  for (let i = 0; i < digits; i++) {
    id.push(str[Math.floor(Math.random() * str.length)]);
  }
  return id.join('');
}
