import { hooks } from "@/data/hooks";

export function filterHooks(search: string) {
    return hooks.filter((hook) =>
        hook.name.toLowerCase().includes(search.toLowerCase())
    )
}