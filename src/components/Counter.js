import React from 'react';

/**
 * Component for showing input text box along with buttons to increment and decrement
 *
 * @component
 * @example
 * return (
 *   <Counter />
 * )
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  /**
   * function that takes the input textbox value and updates state with the new value
   * @param   {EventListenerObject} e event listener object triggered from the input textbox change
   * @return  {void}
   */
  onInputChange(e) {
    const rawVal = e.target.value;
    const parsedVal = parseInt(rawVal, 10);

    if (!isNaN(parsedVal)) {
      this.updateClassAndState(parsedVal);
    } else {
      this.setState({ ...this.state, number: rawVal });
    }
  }

  /**
   * function that increments or decrements the input textbox number depending on which button was clicked
   * @param   {EventListenerObject} e event listener object triggered from the button click
   * @return  {void}
   */
  onButtonClick(e) {
    const incr = parseInt(e.target.value, 10);
    let val = parseInt(this.state.number, 10) + incr;

    if (isNaN(val)) {
      val = incr;
    }

    this.updateClassAndState(val);
  }

  /**
   * helper function that updates the class to possibly change color and state
   * @param   {number} val value from the textbox change or button click after being parsed as an int
   * @return  {void}
   */
  updateClassAndState(val) {
    const input = document.getElementById('numbox');

    if (val < 0) {
      input.classList.add('negative');
    } else {
      input.classList.remove('negative');
    }

    this.setState({ ...this.state, number: val });
  }

  /**
   * returns the JSX to be rendered for the counter component
   * @return  {JSX}     Counter component consisting of a group of HTML elements
   */
  render() {
    return (
      <div className="counter">
        <p>number</p>
        <button value="-1" onClick={this.onButtonClick.bind(this)}>
          -
        </button>
        <input
          type="number"
          id="numbox"
          value={this.state.number}
          onChange={this.onInputChange.bind(this)}
        />
        <button value="1" onClick={this.onButtonClick.bind(this)}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
