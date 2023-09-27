import { Component } from "react";

class Count extends Component{
    constructor(props){
        super();
        this.state={};
    }
   
    render(){
        return(
            <h1>{this.props.count1}</h1>
        );
    }
}
export default Count;