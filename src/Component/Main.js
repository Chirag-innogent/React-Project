import { Component } from "react";
import Count from "./Count";
import Sidebar from "./Sidebar";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 ,
                        selected:""
        };
    }
    countIncreament() {
        this.setState({ count: this.state.count+1 });
    }
    settingState(a){
        this.setState({selected:a})
    }
    render() {
        return (
            <><div class="row" >                
                <div class="col-md-4"><Sidebar /></div>
                <div class="col-md-8">
                <h1>Count :<Count count1={this.state.count} /> </h1>
                <button onClick={()=>this.countIncreament()} >Click Me </button>
                </div>
                </div>

                
            </>

        );
    }
}
export default Main;