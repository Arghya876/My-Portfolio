import React, { Component } from 'react';

class Hometextanima extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Machine Learning',
      dots: '',
      maxDots: 4,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        dots: prevState.dots.length < prevState.maxDots ? prevState.dots + '.' : '',
      }));
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="cont">
        <p>
          Recently I'm Working on{' '}
          <span style={{ fontWeight: 'bold' }}>
            Artificial Intelligence <br />
            <span style={{ color: 'red' }}>and</span>{' '}
            <span className="text_anima">
              {this.state.text}
              {this.state.dots}
            </span>
          </span>
        </p>
      </div>
    );
  }
}

export default Hometextanima;
