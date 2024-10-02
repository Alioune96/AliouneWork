import { createStore as _createStore } from "vuex";

export function createStore(currentUser){
    let store = _createStore({
        state: {
            user: currentUser || {
                roles: '',
               userId: 0
            },
        },
        mutations: {
            SET_KING(state,user){
                state.user = user;
                localStorage.setItem('user', JSON.stringify(user))
            },
            LOG_OUT(state){
                state.user = '';
                localStorage.removeItem('user')
            }
        }
        
    })
    return store
}