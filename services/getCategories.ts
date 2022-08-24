import { useAsync } from './../hooks/useAsync';
import sanityClient from "../sanity";

async function getCategories() {
    return await sanityClient.fetch(
      `*[_type == "category"]`
    )
}

export default function useCategories() {
  return useAsync(getCategories)
}