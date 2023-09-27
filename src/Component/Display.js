import { Component } from "react";
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import Contact from "./Contact";

class Display extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                    {this.props.selected ==='home'?<Home />:null}
                    {this.props.selected ==='about'?<About />:null}
                    {this.props.selected ==='help'?<Help />:null}
                    {this.props.selected ==='contactUs'?<Contact  />:null}
                </div>
        );
    }
}
export default Display;