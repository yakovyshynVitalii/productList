import {ref} from "vue";

export function useLoading() {
  const loading = ref<boolean>(true)

  const changeLoading = (value: boolean) => loading.value = value;

  return {
    loading,
    changeLoading
  }
}