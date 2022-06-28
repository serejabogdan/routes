import {createBrowserHistory} from 'history';
import {createReduxHistoryContext} from "redux-first-history";
import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory()
});

const addBook = createAction('addBook')
const deleteBook = createAction('deleteBook')

const reducer = createReducer({books: []}, builder => {
    builder.addCase(addBook, (state, action) => {
        state.books.push(action.payload)
    }).addCase(deleteBook, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload.id)
    })
})

export const store = configureStore({
    reducer: {
        reducer,
        router: routerReducer,
    },
    middleware: () => [routerMiddleware]
});

export const history = createReduxHistory(store);
