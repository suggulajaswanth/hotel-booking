import { createContext } from 'react';

export enum BottamNav {
    HOME = 'home',
    SEARCH = 'search',
    BOOKMARK = 'bookmark',
    PROFILE = 'profile',
}

export type NavType = {
    activePage: BottamNav,
    activeValue: number
}

export type FilterData ={
    GuestCount: number,
    Date: string,
    Area: string
}

export type ComponentVisbilityState = {
    login: boolean,
    activePage: NavType,
    showMenuPage: boolean,
    showFilterPage: boolean,
    filterData: FilterData,
    showDetailsPage: boolean,
    showBookingsPage: boolean,
    userLoggedIn: boolean
};

export const InitialComponentState: ComponentVisbilityState = {
    login: false,
    activePage: { activePage: BottamNav.HOME, activeValue: 0 },
    showMenuPage: false,
    showFilterPage: false,
    filterData:{
        GuestCount: 0,
        Date: '',
        Area: ''
    },
    showDetailsPage:false,
    showBookingsPage:false,
    userLoggedIn:false
};

export type ComponentDispatchAction = {
    type: Actions;
    data?:
    | boolean
    | NavType
    | FilterData
};

export enum Actions {
    SET_LOGIN,
    SET_ACTIVE_PAGE,
    SHOW_HIDE_MENU_PAGE,
    SHOW_HIDE_FILTER_PAGE,
    SET_FILTER_DATA,
    SHOW_HIDE_DETAILS_PAGE,
    SHOW_HIDE_BOOKINGS_PAGE,
    SET_IS_LOGGGED_IN
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
                activePage: action.data as NavType,
            }
        }
        case Actions.SHOW_HIDE_MENU_PAGE: {
            return {
                ...state,
                showMenuPage: action.data as boolean
            }
        }
        case Actions.SHOW_HIDE_FILTER_PAGE: {
            return {
                ...state,
                showFilterPage: action.data as boolean
            }
        }
        case Actions.SET_FILTER_DATA:{
            return{
                ...state,
                filterData: action.data as FilterData
            }
        }
        case Actions.SHOW_HIDE_DETAILS_PAGE:{
            return{
                ...state,
                showDetailsPage:action.data as boolean
            }
        }
        case Actions.SHOW_HIDE_BOOKINGS_PAGE:{
            return{
                ...state,
                showBookingsPage:action.data as boolean
            }
        }
        case Actions.SET_IS_LOGGGED_IN:{
            return{
                ...state,
                userLoggedIn: action.data as boolean
            }
        }
    }
};
function noop(action: ComponentDispatchAction): void {
    throw new Error('Function not implemented.');
};
