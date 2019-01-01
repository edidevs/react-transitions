import React, { Component } from 'react';
import '../css/App.css';
import ReactTransition from 'react-transition-group/Transition';

class TransitionComp extends Component{

    state = {
        show:false
    }

    showDiv = () => {
        this.setState({
            show:!this.state.show ? true : false
        })
    };

    render(){
        return(
            <div>
                <ReactTransition
                    in={this.state.show}
                    timeout={{
                        enter:2000,
                        exit:50
                    }}

                    enter={true}
                    exit={true}

                    onEnter={ (node) => {
                        console.log('Enter')
                    }}

                    onExit={ (node) => {
                        console.log('Exited')
                    }}

                   

                   
                >
                    {state => 
                    
                        <div className={`square square-${state}`}>
                            { `square square-${state}` }
                        </div>
                
                }

                </ReactTransition>

                <div className="showDiv"
                    onClick = {this.showDiv}
                >
                    show or hide
                </div>
                
            </div>

        )
    }
}


export default TransitionComp;