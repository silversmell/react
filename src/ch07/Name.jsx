import React,{useState} from 'react';

export default function Main(props){

    function changeEn() {
        let copy = [props.�̸����]
        copy[0] = 'park'
        copy[1] = 'eun'
        copy[2] = 'hyang'
        props.�̸�����(copy)
    }

    return (
        <div>
            <h2>�ڱ�Ұ�</h2>
            <button onClick={changeEn}>name change</button>
            <p> {props.�̸����[0]}</p>
            <p> {props.�̸����[1]}</p>
            <p>{props.�̸����[2]}</p>
        </div>
    )

}