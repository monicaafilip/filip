import PORTOFOLIO_DATA from './portofolio.data';

const INITIAL_STATE = {
    products: PORTOFOLIO_DATA
};

const portofolioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default portofolioReducer;