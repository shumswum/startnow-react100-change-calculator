import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dueInput: '',
      recievedInput: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      changeDue: 0
    };
    this.handleDueInputChange = this.handleDueInputChange.bind(this);
    this.handleRecievedInputChange = this.handleRecievedInputChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleDueInputChange(event) {
    this.setState({
      dueInput: event.target.value
    });
  }

  handleRecievedInputChange(event) {
    this.setState({
      recievedInput: event.target.value
    });
  }

  calculateChange() {
    let due = parseInt(this.state.recievedInput * 100, 10) - parseInt(this.state.dueInput * 100, 10);
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let one = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;

    twenty = Math.floor(due / 2000);
    due %= 2000;
    ten = Math.floor(due / 1000);
    due %= 1000;
    five = Math.floor(due / 500);
    due %= 500;
    one = Math.floor(due / 100);
    due %= 100;
    quarter = Math.floor(due / 25);
    due %= 25;
    dime = Math.floor(due / 10);
    due %= 10;
    nickel = Math.floor(due / 5);
    due %= 5;
    penny = due / 1;
    const change = (((twenty * 2000) + (ten * 1000) + (five * 500) + (one * 100) + (quarter * 25) + (dime * 10) + (nickel * 5) + penny) / 100);

    this.setState({
      twenties: twenty,
      tens: ten,
      fives: five,
      ones: one,
      quarters: quarter,
      dimes: dime,
      nickels: nickel,
      pennies: penny,
      changeDue: change
    });
  }

  render() {
    return (
      <div>
        <header><h1 className="header-border">Change Calculator</h1></header>
        <div className="container-fluid clearfix">
          <div className="row">
            <div className="col-4">
              <div className="panel panel-default">
                <h1 className="panel-title">Enter information</h1>
                <strong>How much is due?</strong>
                <input className="input" value={this.state.dueInput} onChange={this.handleDueInputChange}/>
                <strong>How much was recieved?</strong>
                <input className="input" value={this.state.recievedInput} onChange={this.handleRecievedInputChange}/>
                <button className="btn" onClick={this.calculateChange}>Calculate</button>
              </div>
            </div>
            <div className="col-8">
              <div className="panel panel-default">
                  <h4 className="panel-title response panel">{`The total change due is $${this.state.changeDue}`}</h4>
                  <div className="row">
                    <div className="col-3 panel">
                      <h4>Twenties</h4>
                      <p>{this.state.twenties}</p>
                    </div>
                    <div className="col-3 panel">
                      <h4>Tens</h4>
                      <p>{this.state.tens}</p>
                    </div>
                    <div className="col-3 panel">
                      <h4>Fives</h4>
                      <p>{this.state.fives}</p>
                    </div>
                    <div className="col-3 panel">
                      <h4>Ones</h4>
                      <p>{this.state.ones}</p>
                    </div>
                  </div>
                <div className="row">
                  <div className="col-3 panel">
                    <h4>Quarters</h4>
                    <p>{this.state.quarters}</p>
                  </div>
                  <div className="col-3 panel">
                    <h4>Dimes</h4>
                    <p>{this.state.dimes}</p>
                  </div>
                  <div className="col-3 panel">
                    <h4>Nickels</h4>
                    <p>{this.state.nickels}</p>
                  </div>
                  <div className="col-3 panel">
                    <h4>Pennies</h4>
                    <p>{this.state.pennies}</p>
                  </div>
              </div>
                 </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
