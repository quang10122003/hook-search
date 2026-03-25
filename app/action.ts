import { hooks } from "@/data/hooks";
import { Line } from './../components/authen/Line';

export function filterHooks(search: string) {
    return hooks.filter((hook) =>
        hook.name.toLowerCase().includes(search.toLowerCase())
    )
}