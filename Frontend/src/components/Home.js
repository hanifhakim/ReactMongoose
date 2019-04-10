import React, { Component } from 'react';
// import {connect} from 'react-redux'
import Cookies from 'universal-cookie'
import{Redirect} from 'react-router-dom'

const cookie = new Cookies()
class Home extends Component{
    onSubmitForm = () => {
        const task = this.description.value
        console.log(task);
        
    }
    
    render(){
        if(cookie.get('idLogin')){
            return(
                <div className='container'>
                    <h1 className='display-4'>Task</h1>
                        <div>
                    
                        </div>
                        <div>
                        <form className="input-group"><input ref={input => this.description = input} className="form-control" type="text" /></form>
                        <button className="btn btn-dark m-2" onClick={this.onSubmitForm}>Submit</button>
                        </div>
                </div>
                )                    
        }
        return <Redirect to='/login'/>
    }
}

// const mapStateToProps = (state) =>{
//     return{
//         user : state.auth
//     }
// }
export default Home