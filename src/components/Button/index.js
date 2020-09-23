import React from 'react';

class Button extends React.Component{
    render(props){
        return (
            <div>
                <Button>{this.props.text}</Button>
            </div>   
        );
    }
}

export default Button;
