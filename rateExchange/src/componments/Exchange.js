import React, { Component } from "react";
import {
  getAmount2,
  changeAmount1,
  setCurrency1,
  setCurrency2,
  swap
} from "../actions/actions";
import { connect } from "react-redux";

class Exchange extends Component {
  // handleChange = e => {
  //   this.setState({
  //     amount1: e.target.value
  //   });
  // };

  setCurrency1 = e => {
    // this.setState({
    //   c1: e.target.value
    // });
  };

  setCurrency2 = e => {
    // this.setState({
    //   c2: e.target.value
    // });
  };

  Swich = () => {
    // this.setState({
    //   c1: this.state.c2,
    //   c2: this.state.c1
    // });
  };

  componentDidMount() {
    this.props.getAmount2();
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps !== this.props) {
      this.props.getAmount2();
    }
  }

  render() {
    const { amount1, amount2, c1, c2 } = this.props.currency;
    const { changeAmount1, setCurrency1, setCurrency2 } = this.props;

    return (
      <div>
        <h1>React-redux blow</h1>
        <select onChange={setCurrency1} id="currency-one" value={c1}>
          <option value="USD">USD</option>
          <option value="CNY">CNY</option>
        </select>
        <input
          type="number"
          placeholder="number"
          value={amount1}
          onChange={changeAmount1}
        />

        <div className="swap-rate-container">
          <button className="btn" id="swap" onClick={this.props.swap}>
            Swap
          </button>
          <div className="rate" id="rate"></div>
        </div>
        <select onChange={setCurrency2} id="currency-one" value={c2}>
          <option value="CNY">CNY</option>
          <option value="USD">USD</option>
        </select>

        <input type="number" placeholder="0" value={amount2} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currency
});

export default connect(mapStateToProps, {
  getAmount2,
  changeAmount1,
  setCurrency1,
  setCurrency2,
  swap
})(Exchange);
