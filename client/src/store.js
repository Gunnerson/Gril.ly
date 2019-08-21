import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState, 
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )
);

//===========

// if (window.navigator.userAgent.includes('Chrome')) {
//     var store = createStore(
//         rootReducer,
//         initialState,
//         compose(
//             applyMiddleware(
//                 routerMiddleware(browserHistory)
//             ),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     );
// } else {
//     var store = createStore(
//         rootReducer, 
//         initialState,
//         compose(
//             applyMiddleware(
//                 routerMiddleware(browswerHistory)
//             )
//         )
//     );
// }
//========
// const middleware = applyMiddleware(
//     routerMiddleware(browswerHistory),
//     thunkMiddleware,
//     authStateMiddleware
// );

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(middleware)
// );


export default store;