import { Component, useState } from "react";
import profilePic from '../images/00027-2575342202.png';

class FeedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    render() {
        return (
            <div className="feed">
                <img className="mainLogo" src={profilePic} alt="profile pic"></img>
                <input type="text" placeholder="What's on your mind, Adam?"></input>
            </div>
        );
    }
}
export default FeedComponent;