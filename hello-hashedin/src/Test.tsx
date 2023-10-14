import React from 'react';

interface msg{
    m : string;
}

function Message(params:msg) {
    return (<h2>Read : {params.m}</h2>);
}

export default Message;