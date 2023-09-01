import React from "react";

const styles = {
    wrapper:{
        margin:8,
        padding:8,
        display:"flex",
        flexDirection:"row",
        border: "1px solid grey",
        borderRadius:16,
    },
    imageContainer:{},
    image:{
        width:50,
        height:80,
        borderRadius:25,
    },
    contentContainer:{
        marginLeft:8,
        marginBottom:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"Center",
    },
    nameText:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
    },
    commentText:{
        color:"black",
        fontsize:16,
    },

};

function Comment(props) {
    return (
        <div style = {styles.wrapper}>
        <div style = {styles.imageContainer}>
        <img
        src = "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
        style={styles.image}
        />
        </div>
        <div style = {styles.conetentContainer}>
        <span style = {styles.nameText}>{props.name}</span>
        <span style = {styles.commentText}>{props.comment}</span>
        <span>{props.age}</span>
        <span>{props.cancle}</span>
        </div>
        </div>
    );
}

export default Comment;