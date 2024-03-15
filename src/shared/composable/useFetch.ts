export async function useFetch(url: string){
  const response = await fetch(url);
  const parsed_result = await response.json()

  return parsed_result
}