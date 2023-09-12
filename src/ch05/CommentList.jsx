import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name:"Anna",
        comment:"Hello Minsoo",
        age:1,
        cancel:"true",

    },
    {
        name:"Jihoon",
        comment:"love",
        age:2,
        cancel:"false",
    },
    {
        name:"minsoo",
        comment:"baby",
        age:3,
        cancel:"true",
    }
];

function CommnetList(props) {
    return (
        <div>
        {comments.map((comment)=>{
            return(
            <Comment name={comment.name} comment={comment.comment} age={comment.age} cancel={comment.cancle}/>
            );
            })}
        </div>
    );
}
export default CommnetList;