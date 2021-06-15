
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Header.css";
import {connect} from 'react-redux';
import {LOGOUT} from '../../redux/types';

const Header = (props) => {

    let history = useHistory();

    const takeMe = (where) => {
        history.push(where);
    }

    const logOut = () => {
        props.dispatch({type:LOGOUT})

        setTimeout(()=> {
            history.push('/');
        },500)
        
    }

    if(props.credentials?.token != ''){
        return (
            <div className="vistaHeader">
                <div className="linkLogin" onClick={()=>takeMe("/profile")}>{props.credentials?.user.name}</div>
                <div className="linkLogin" onClick={()=>logOut()}>Log Out</div>
            </div>
        )

    }else{
        return (
            <div className="vistaHeader">
                <div className="linkLogin" onClick={()=>takeMe("/login")}>Login</div>
                <div className="linkLogin" onClick={()=>takeMe("/register")}>Register</div>
            </div>
        )
    }

    
}

export default connect((state)=>({

    credentials:state.credentials

}))(Header);