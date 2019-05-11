import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import App from '../App';
import { resultados1 } from '../assets/mock-data';



export default class ReduxProvider extends React.Component {

    constructor(props) {
        super(props);
        this.initialState = {
		dual: false,
		currentLey: 0, //la 0 es la ley d'hondt
		currentAno: 2016,
		currentRegion: "Madrid", //la 0 es españa, el resto de provincias tendrán su código
        resultados : JSON.parse(resultados1)

        };
        this.store = this.configureStore();
    }
    
    render() {
        return (
            <Provider store={this.store}>
                <div style={{ height: '100%' }} >
                    <App store={this.store} />

                </div>
            </Provider>
        );
    }
    configureStore() {
        const store = createStore(GlobalState, this.initialState);
        return store;
    }
}
