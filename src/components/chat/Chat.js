import React from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const { roomId } = useParams();
    return (
        <div className='chat'>
            <h2>You are in the {roomId} room</h2>
            <div className='chat__header'>
                <div className='chat__headerRight'>
                    <h4 className='chat__channelName'><strong>#general</strong></h4>
                </div>
                <div className='chat__headerLeft'>

                </div>
            </div>
        </div>
    );
}

export default Chat
