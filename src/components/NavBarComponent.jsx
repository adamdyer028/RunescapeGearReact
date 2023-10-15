import { Component, useState } from "react";
import logo from '../images/00010-1307476390.png';
import home from '../images/home.png';
import people from '../images/people.png';
import stats from '../images/statistics.png';
import messages from '../images/email.png';
import notification from '../images/notification.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import profilePic from '../images/00027-2575342202.png';

class NavBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div >
                    <img src={logo} alt="logo" className="mainLogo d-inline-block"></img> 
                    <input className="navSearch" type="text" placeholder="Search..."></input> 
                    </div>        
                    
                    
            
                    <div className="buttons">
                        <a className="nav-item" href="#home"><img src={home} alt="home" className="icon"></img></a>
                        <a className="nav-item" href="#friends"><img src={people} alt="friends" className="icon"></img></a>
                        <a className="nav-item" href="#stats"><img src={stats} alt="stats" className="icon"></img></a>
                    
                        <a className="nav-item" href="#messages"><img src={messages} alt="messages" className="icon"></img></a>
                        <a className="nav-item" href="#notifications"><img src={notification} alt="notifications" className="icon"></img></a>
                        <a className="nav-item" href="#stats"><img src={profilePic} alt="profile" className="icon proPic"></img></a>
                    </div>
                </nav>
            </div>  
        );
    }
}
export default NavBarComponent;