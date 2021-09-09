import React, {Component} from "react";
import Card from "./CardUI"; 
import img1 from "../../resources/img/austin-with-stars.jpg"; 
import img2 from "../../resources/img/chevron-16x20ffffff.jpg";
import img3 from "../../resources/img/twurz_20090712_0246.jpg"; 



class Cards extends Component {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title={"#1"} value={"/products/1"} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title={"#2"} value={"/products/2"} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title={"#3"} value={"/products/3"}/>
                    </div>

                </div>
            </div>

        ); 
    }
}


export default Cards; 