interface Element {
  [key: string]: any; // Info: used as a global element that can contain any type
}

export function useFilter<T extends Element>(
  elements: T[],
  filterBy: keyof T,
  filterValue: string
): T[] {
  const inputText: string = filterValue.toLocaleLowerCase().trim();
  return elements.filter((item: T) =>
    item[filterBy].toString().toLocaleLowerCase().includes(inputText)
  );
}