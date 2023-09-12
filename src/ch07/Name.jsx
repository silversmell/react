import React,{useState} from 'react';

export default function Main(props){

    function changeEn() {
        let copy = [props.이름목록]
        copy[0] = 'park'
        copy[1] = 'eun'
        copy[2] = 'hyang'
        props.이름변경(copy)
    }

    return (
        <div>
            <h2>자기소개</h2>
            <button onClick={changeEn}>name change</button>
            <p> {props.이름목록[0]}</p>
            <p> {props.이름목록[1]}</p>
            <p>{props.이름목록[2]}</p>
        </div>
    )

}