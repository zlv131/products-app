export const convertId = (id: string): number => {
    return Number(id?.replace("id=", ""));
}