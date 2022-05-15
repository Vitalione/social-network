import React, { Component } from "react";
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
      My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' likeCount='23'/>
        <Post message='It my first post' likeCount='0'/>
      </div>
      </div>
	)
}

export default MyPosts;