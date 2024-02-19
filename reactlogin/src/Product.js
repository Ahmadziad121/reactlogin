import React from "react";
import './App.css';
class Car3 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render()
    {
        return(
            <div className="CAR" style={{borderColor:this.props.color,borderWidth:"10px",borderStyle:'solid'}}>
            <img src={this.props.imge} className="car"></img>
            <h2>Discription :{this.props.discription}</h2>
            <h2>color is :{this.props.color}</h2>
            <h1>brand is:{this.props.brand}</h1>
            </div>
        )
    }
}
export default Car3;