import {takeLatest , call , put} from 'redux-saga/effects';
import { AccountReducer } from '../Reducers/Account';
import { ProductReducer } from '../Reducers/Product';
import { SystemReducer } from '../Reducers/System';
import Cookies from 'universal-cookie';
import * as api from '../../api';

function* registerSaga (action){
    try {
        // yield put(SystemReducer.actions.setNoError());
        const registerAccount = yield call(api.register , action.payload);
        // put này dùng để dispatch 1 actions đến thằng reducer
        yield put(AccountReducer.actions.registerSuccess(registerAccount.data));
        // set message success
    } catch (error) {
        console.error(error.response.data);
    }
}

function* loginSaga (action){
    try {
        yield put(SystemReducer.actions.setIsLoading(true));
        const cookies = new Cookies();
        const loginAccount = yield call(api.login , action.payload);
        yield cookies.set('token',loginAccount.data.accesstoken,{ path: '/' });
        yield put(AccountReducer.actions.loginSuccess(loginAccount.data));
        yield put(SystemReducer.actions.setIsLoading(false));
        window.location.reload();
        
    } catch (error) {
        // message , type
        yield put(SystemReducer.actions.setIsLoading(false));
        yield put(SystemReducer.actions.setMessageAlert({...error.response.data,kind : true}));
    }
}
function* SignOutSaga (action){
    try {
        const cookies = new Cookies();
        yield put(SystemReducer.actions.reset());
        yield cookies.remove('token');
        const logoutAccount = yield call(api.logout , action.payload);
        yield put(AccountReducer.actions.signOutSuccess());
        // yield put(SystemReducer.actions.setMessageAlert({...logoutAccount.data,kind : false}));
    } catch (error) {
        // message , type
        yield put(SystemReducer.actions.setMessageAlert({...error.response.data,kind : true}));
    }
}

function* accountSaga(){
    yield takeLatest(AccountReducer.actions.registerRequest ,registerSaga); 
    yield takeLatest(AccountReducer.actions.loginRequest ,loginSaga); 
    yield takeLatest(AccountReducer.actions.signOutRequest ,SignOutSaga); 
   
}

export default accountSaga;