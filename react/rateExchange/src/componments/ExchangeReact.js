import React, { Component } from "react";

export default class Exchange extends Component {
  state = {
    amount1: 1,
    amount2: 0,
    c1: "USD",
    c2: "CNY"
  };
  handleChange = e => {
    this.setState({
      amount1: e.target.value
    });
  };

  setCurrency1 = e => {
    this.setState({
      c1: e.target.value
    });
  };

  setCurrency2 = e => {
    this.setState({
      c2: e.target.value
    });
  };

  Swich = () => {
    this.setState({
      c1: this.state.c2,
      c2: this.state.c1
    });
  };

  componentDidMount() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.c1}`)
      .then(response => response.json())
      .then(data => this.setState({ amount2: data.rates[this.state.c2] }));
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState !== this.state) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.c1}`)
        .then(response => response.json())
        .then(data =>
          this.setState(state => ({
            amount2: data.rates[this.state.c2] * state.amount1
          }))
        );
    }
  }

  render() {
    const { c1, c2 } = this.state;
    return (
      <div>
        <h1>React without Redux blow</h1>
        <select onChange={this.setCurrency1} id="currency-one" value={c1}>
          <option value="USD">USD</option>
          <option value="CNY">CNY</option>
        </select>
        <input
          type="number"
          placeholder="number"
          value={this.state.amount1}
          onChange={this.handleChange}
        />

        <div className="swap-rate-container">
          <button className="btn" id="swap" onClick={this.Swich}>
            Swap
          </button>
          <div className="rate" id="rate"></div>
        </div>
        <select onChange={this.setCurrency2} id="currency-one" value={c2}>
          <option value="CNY">CNY</option>
          <option value="USD">USD</option>
        </select>
        {/* {this.state.amount1},
                {this.state.amount2} */}

        <input type="number" placeholder="0" value={this.state.amount2} />
      </div>
    );
  }
}
