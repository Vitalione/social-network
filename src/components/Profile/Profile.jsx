import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
	return (
		<div>
        <div>
        <img src='https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg'/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
      </div>
	)
}

export default Profile;