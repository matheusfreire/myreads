import React from 'react';
import ReactLoading from 'react-loading';

class Loading extends React.Component{
    render(){
        return (
            <ReactLoading type="spinningBubbles" color="#444" />
        )
    }
}

export default Loading