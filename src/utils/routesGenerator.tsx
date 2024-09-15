import { TRoute, TRouteGenerator } from "../types";

export const routeGenerator = (items: TRouteGenerator[]) => {
    const router = items.reduce((acc: TRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            })
        }
        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path!,
                    element: child.element
                })
            })
        }
        return acc
    }, [])
    return router;
}