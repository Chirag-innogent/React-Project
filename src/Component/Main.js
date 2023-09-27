import { Component } from "react";
import Count from "./Count";
import Sidebar from "./Sidebar";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            selected: ""
        };
    }
    countIncreament() {
        this.setState({ count: this.state.count + 1 });
    }
    settingState(a) {
        this.setState({ selected: a })
    }
    render() {
        return (
            <><div class="row" >
                <div class="col"><Sidebar /></div>
            </div>
                <div class="row" >

                    <div class="col-md-8 offset-md-3">
                        <div class="card col-md-4" >
                            <div class="card-body">
                                <h5 class="card-title">Click Counter</h5>
                                <h1>Count :<Count count1={this.state.count} /> </h1>

                                <button class="btn btn-success" onClick={() => this.countIncreament()} >Click Me </button>

                            </div>
                        </div>

                    </div>
                </div>

            </>

        );
    }
}
export default Main;