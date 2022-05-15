import React from "react";
import classes from'./Post.module.css';

const Post = (props) => {
	return (
        <div className={classes.item}>
          <img src='https://otvet.imgsmail.ru/download/270310823_6852df38e9783f4012b0c9956656aab2.jpg'/>
          {props.message}
          <div>
          <span>like</span>
          {props.likeCount}

          </div>
      </div>
	)
}

export default Post;