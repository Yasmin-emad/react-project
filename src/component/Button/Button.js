import React from "react";

class Button extends React.Component{

    constructor(props){
        super()
    }

    render(){
        return(
            <>
                <button type="button" className="btn btn-primary w-25">{this.props.btnValue}</button>
            </>
        )
    }

}

export default Button;