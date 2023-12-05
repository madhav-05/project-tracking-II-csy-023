import React, { Component } from 'react'

export default class ClassDemo extends Component{
    constructor(props){
        super(props);
        this.state={current:0};
    };
    handleIncrement = () =>
    {
        this.setState(prevState=>{
            return {
                current:prevState.current+1
            }
        })
    }
    handleDecrement = () =>
    {
        this.setState(prevState=>{
            if(prevState.current>0){
                return{
                    current:prevState.current-1
                }
            }
        })
    }
    addtoCart = () => {
            if(this.state.current>0){
                alert(this.state.current+" "+this.props.name+" added to cart sucessfully");
            }
            else{
                alert("please add "+this.props.name+ " to cart");
            }
    }
    render(){
        return(
            <div>
                <h1>{this.props.desc}:{this.props.name}</h1>
                <button onClick={this.handleDecrement}>-</button>
                {this.state.current}
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.addtoCart}>add to cart</button>
            </div>
        );
    }
}