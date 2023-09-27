import { Component } from "react";
import Display from "./Display";


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:"home"
        }
    }
    settingState(a){
        this.setState({selected:a})
    }
    render(){

            return (
                <>
                <div class="sidebar">
                <button onClick={()=>{this.settingState("home")}} >Home</button>:
                <button onClick={()=>{this.settingState("about")}} >About</button>:
                <button onClick={()=>{this.settingState("help")}} >Help</button>:
                <button onClick={()=>{this.settingState("contactUs")}} >Contact Us</button>:
                </div>
                
                <Display selected={this.state.selected} />
                </>
        );
           
        
    }
}
export default Sidebar;