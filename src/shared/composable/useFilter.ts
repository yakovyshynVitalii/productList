interface Element {
  [key: string]: string | number;
}
export function useFilter(elements: Element[], filterBy: string, filterValue: string) {
  const inputText = filterValue.toLocaleLowerCase().trim();
  return elements.filter((item) => item[filterBy].toString().toLocaleLowerCase().includes(inputText));
}