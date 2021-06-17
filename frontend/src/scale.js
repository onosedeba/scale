import React, {Component} from 'react';

class Scale extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [],
            lastWeighed: 0,
            weighedSum: 0 
        }
        this.newWeigh = this.newWeigh.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
      }

    // clicking the zero button clears the last weighed mass and the sum of all masses
    clearHistory(){
        this.setState({
            history: [],
            lastWeighed: 0,
            weighedSum: 0
          });
    }

    // fetches the random generated weigh from the server
    async newWeigh() { 
        let randomWeigh;
        let newHistory = this.state.history;
        let newSum = this.state.weighedSum;
        //use api endpoint
        randomWeigh = await fetch('/weigh').then(res => res.json());

        //add new weight to history
        newHistory.push(parseInt(randomWeigh));
        
        //perform the summation
        newSum += randomWeigh; 

            this.setState({
                history: newHistory,
                lastWeighed: randomWeigh,
                weighedSum: newSum
              });
     }
      
    render() {
        return (
          <div className="container">
            <div className="header">
            <button 
                className="tabs active" 
                onClick={openTab('scale')}
                >
                    Weighing
            </button>
            <button 
                className="tabs" 
                onClick={openTab('history')}
                >
                    History
            </button>
            </div>

            <div className="tabcontent" id="scale">
                <div className="body">
                <h1 className="newMass">
                    {this.state.lastWeighed} kg
                 </h1> 
                 <br />
                <div className="massSum">
                    &#8721; :  {this.state.weighedSum} kg 
                </div>
                </div>
                <div className="footer">
                    <button 
                    className="button" 
                    onClick={this.newWeigh}
                    >
                        Weigh
                    </button>
                    <button 
                        className="button" 
                        onClick={this.clearHistory}
                        >
                            Zero
                    </button>
                </div>
            </div>

            <div className="tabcontent" id="history" >
                <div className="body">
                {this.history}
                </div>
                <div className="footer">
                    <button 
                        className="button" 
                        onClick={sortHistory()}
                        >
                            Sort
                    </button>
                </div>
            </div>

          </div>
        );
      }
}

//function for tab navigation 
function openTab(tabName) {
    //todo
}
function sortHistory(){
    //todo
}

export default Scale