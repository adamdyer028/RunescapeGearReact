import { Component, useState } from "react";
import logo from '../images/00010-1307476390.png';
import home from '../images/home.png';
import people from '../images/people.png';
import stats from '../images/statistics.png';
import messages from '../images/email.png';
import notification from '../images/notification.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


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
                    <img src={logo} alt="logo" className="mainLogo d-inline-block align-top "></img>
                    <input className="searchInput" type="search" placeholder="Search..."></input>

                    <div className="middleButtons">
                        <a href="#home"><img src={home} alt="home" className="homeIcon"></img></a>
                        <a href="#friends"><img src={people} alt="friends" className="friendsIcon"></img></a>
                        <a href="#stats"><img src={stats} alt="stats" className="statsIcon"></img></a>
                    </div>
                    
                    <div className="rightButtons">
                        <a href="#messages"><img src={messages} alt="messages" className="messageIcon"></img></a>
                        <a href="#notifications"><img src={notification} alt="notifications" className="notificationIcon"></img></a>
                        <a href="#stats"><img src={home} alt="profile" className="profileIcon"></img></a>
                    </div>
                </nav>
            </div>  
        );
    }
}
export default NavBarComponent;