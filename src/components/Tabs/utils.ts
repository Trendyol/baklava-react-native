export default function insertObjectBetweenElements<T>(arr: T[], obj: T): T[] {
  if (arr.length <= 1) {
    return arr;
  }
  const result: T[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i], obj);
  }
  result.push(arr[arr.length - 1]);

  return result;
}
