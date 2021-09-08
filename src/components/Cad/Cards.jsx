import React, {Component} from "react";
import Card from "./CardUI"; 

//import img1 from '../resources/img/_MG_1486 800.jpg';

var img1 = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"; 

class Cards extends Component {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title={"Console"} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title={"PlayGround"} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title={"Adventure"} />
                    </div>

                </div>
            </div>

        ); 
    }
}


export default Cards; 