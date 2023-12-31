import { createContext } from 'react';

export enum BottamNav {
    HOME = 'home',
    SEARCH = 'search',
    BOOKMARK = 'bookmark',
    PROFILE = 'profile',
}

export type ComponentVisbilityState = {
    login: boolean,
    activePage: BottamNav
};

export const InitialComponentState: ComponentVisbilityState = {
    login: false,
    activePage: BottamNav.HOME
};

export type ComponentDispatchAction = {
    type: Actions;
    data?:
    | boolean
    | BottamNav

};

export enum Actions {
    SET_LOGIN,
    SET_ACTIVE_PAGE
}

export type Dispatch = (
    action: ComponentDispatchAction
) => void;

export const Context = createContext<{
    state: ComponentVisbilityState;
    dispatch: Dispatch;
}>({
    state: InitialComponentState,
    dispatch: noop,
});

export const ComponentReducer = (
    state: ComponentVisbilityState,
    action: ComponentDispatchAction
): ComponentVisbilityState => {
    switch (action.type) {
        case Actions.SET_LOGIN:
            return {
                ...state,
                login: action.data as boolean,
            };
        case Actions.SET_ACTIVE_PAGE: {
            return {
                ...state,
                activePage: action.data as BottamNav,
            }
        }

    }
};
function noop(action: ComponentDispatchAction): void {
    throw new Error('Function not implemented.');
}

