export const toPascalCase = (str: string) => {
  if (typeof str !== 'string' || str.length === 0 || str === null) {
    return '';
  }

  return str
    .match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )!
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
};
