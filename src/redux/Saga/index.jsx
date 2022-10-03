import {all, fork} from 'redux-saga/effects';
import accountSaga from './accountSaga';
import homeProductSaga from './fetchSaga';
function* rootSaga() {
    yield all([
        fork(accountSaga),
        fork(homeProductSaga),
    ])
}
export default rootSaga;