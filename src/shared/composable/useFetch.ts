const apiUrl = import.meta.env.VITE_API_URL

export async function useFetch(url: string){
  const response = await fetch(apiUrl + url);
  const parsed_result = await response.json()

  return parsed_result
}