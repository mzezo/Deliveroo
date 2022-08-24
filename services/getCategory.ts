import sanityClient from "../sanity";
import { useAsync } from './../hooks/useAsync';

async function getCategory(id: string) {
    await sanityClient.fetch(
        `*[_type == "category" && _id == $id][0]`, { id }
    )
}

export default function useCategories() {
    return useAsync(getCategory)
}