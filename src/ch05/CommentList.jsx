import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name:"Anna",
        comment:"Hello Minsoo",
        age:1,

    },
    {
        name:"Jihoon",
        comment:"love",
        age:2,
    },
    {
        name:"minsoo",
        comment:"baby",
        age:3,
    }
];

function CommnetList(props) {
    return (
        <div>
        {comments.map((comment)=>{
            return(
            <Comment name={comment.name} comment={comment.comment} age={comment.age}/>
            );
            })}
        </div>
    );
}
export default CommnetList;