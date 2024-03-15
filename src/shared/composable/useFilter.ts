export function useFilter(elements, filterBy, filterValue) {
  const inputText = filterValue.toLocaleLowerCase().trim()
  return elements.filter((item) => item[filterBy].toLocaleLowerCase().includes(inputText))
}