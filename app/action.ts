import { hooks } from "@/data/data";

export function filterHooks(search: string) {
    return hooks.filter((hook) =>
        hook.name.toLowerCase().includes(search.toLowerCase())
    )
}

export const getLineState = (step: number, activeFrom: number, doneFrom: number) => ({
    isActive: step === activeFrom,
    isDone: step >= doneFrom,
});