import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MS1Executor from './APIExecutors/MS1Executor';
import MS2Executor from './APIExecutors/MS2Executor';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: 'Initial data ...',
           data2:[
            {
               component: 'First...',
               id: 1
            },
            {
               component: 'Second...',
               id: 2
            },
            {
               component: 'Third...',
               id: 3
            }
         ]
        }
        this.updateState = this.updateState.bind(this)
     };

     updateState(e)
     {
         this.setState({data:e.target.value});
     }
     /*render() {
        return (
           <div>
               <div>
             <Content myDataProp={this.state.data}
             updateStateProp={this.updateState}/>
           </div>
           <div>
             {  this.state.data2.map((dynamicComponent,i)=><Content2 
              key ={i}  componentData ={dynamicComponent} />)}
           </div>
           </div>
        );
     }*/
     render()
     {
         return (
         <Router>
             <div>
                Single Page App
                <ul>
                    <li><Link to={'/MS1Executor'}>MS1Executor</Link></li>
                    <li><Link to={'/MS2Executor'}>MS2Executor</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/MS1Executor' component={MS1Executor} />
                    <Route exact path='/MS2Executor' component={MS2Executor} />
                </Switch>
             </div>
         </Router>
         );
     }
     componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
  }
  
  class Content extends React.Component
  {
    render()
    {
        return (<div>
            <input type="text" onChange={this.props.updateStateProp}
            value={this.props.myDataProp}/>
            <h3>{this.props.myDataProp}</h3>
            </div>);
    }
  }


  class Content2 extends React.Component
  {
    render()
    {
        return (<div>
           <div>{this.props.componentData.component}</div>
           <div>{this.props.componentData.id}</div>
            </div>);
    }
  }

export default App;