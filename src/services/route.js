import {history} from '../store'

function createRoute(route) {
    return {
        route,
        push: () => history.push(route)
    }
}

export const ROUTES = {
    HOME: createRoute('/'),
    ABOUT: createRoute('/about'),
}
