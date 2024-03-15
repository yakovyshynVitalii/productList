import {ref} from "vue";
import type {Ref} from "vue";

export function useLoading() {
  const loading: Ref<boolean> = ref(true)

  const changeLoading = (value: boolean) => loading.value = value;

  return {
    loading,
    changeLoading
  }
}