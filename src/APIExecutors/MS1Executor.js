import React, { Component } from 'react';


class MS1Executor extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
     };
     updateState(e) {
        this.setState({data: e.target.value});
     }
    
    setInput()
    {
        fetch('http://localhost:8080/greeting').then(
            function(response){console.log("Response from greeting "+ JSON.parse(response));}
        );  
        
        
        }
    render() {
      return (
         <div>
            <h2>MS1Executor</h2>
            <button type="button" onClick={this.setInput}> Get MS1 Response</button><br/>
            <input id="ms1Inpu1" type="text" value={this.state.data} onChange={this.updateState}/>
         </div>
      );
   }
}
export default MS1Executor;