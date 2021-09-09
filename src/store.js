import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),
        //configuracion para cuando no tenemos instaldo el Redux Dev Tool y se puede usar en cualquier maquina 
        typeof window === 'object' && 
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                   window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
     
    )


);


export default store;
