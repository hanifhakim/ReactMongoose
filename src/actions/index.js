import axios from '../config/axios'

export const onRegister = (name, age, email, password) => {
    return dispatch => {
        axios.post('/users', {
                name, age, email, password
        }).then(res => {
            console.log("YEaaaayyy");
            
        }).catch(e => {
            console.log(e.response.data.replace('User validation failed: ', ''));
        })
    }
}