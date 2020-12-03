import api from './Api.js'
export default{

    register(credentials){
        return api().post('/register',credentials)
    }
}