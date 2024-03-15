interface Product {
  [key: string]: string | number | string[];
  images: string[];
}

export function useFilter(elements: Product[], filterBy: string, filterValue: string) {
  const inputText = filterValue.toLocaleLowerCase().trim();
  return elements.filter((item) => item[filterBy].toString().toLocaleLowerCase().includes(inputText));
}