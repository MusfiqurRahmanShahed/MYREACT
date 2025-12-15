import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps){
        const{change:currentChange}=this.props;
        const{change:nextChange}=nextProps;
        
        if(nextChange!==currentChange){
            return true;
        }
        return false;
    }   
    render() {
        console.log("Button class render")
        const{change,locale}=this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                Click Here
            </button>
        );
    }
}

export default Button;