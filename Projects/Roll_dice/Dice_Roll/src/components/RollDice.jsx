import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);

    this.state = {
      die1: "one",
      die2: "one",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const { sides } = this.props;
    setTimeout(() => {
      this.setState({
        die1: sides[Math.floor(Math.random() * sides.length)],
        die2: sides[Math.floor(Math.random() * sides.length)],
        rolling: true,
      });

      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    const handleBtn = this.state.rolling ? "RollDice-rolling" : "";
    const { die1, die2, rolling } = this.state;
    return (
      <>
        <h1 className="heading">Dice Rolling Game </h1>
        <div className="RollDice">
          <div className="RollDice-container">
            <Die face={die1} rolling={rolling} />
            <Die face={die2} rolling={rolling} />
          </div>
          <button
            className={handleBtn}
            disabled={this.state.rolling}
            onClick={this.roll}
          >
            {this.state.rolling ? "Rolling" : "Play!"}
          </button>
        </div>
      </>
    );
  }
}

export default RollDice;
