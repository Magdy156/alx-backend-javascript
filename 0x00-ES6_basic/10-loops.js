export default function appendToEachArrayValue(array, appendString) {
  const empty = [];
  for (const ele of array) {
    empty.push(appendString + ele);
  }

  return empty;
}
