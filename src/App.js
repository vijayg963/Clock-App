import React from 'react';
import Countdown from './components/Countdown';
import Stopwatch from './components/Stopwatch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countDown: false,
      stopWatch: false,
    };
  }
  handleClose = () => {
    this.setState({
      countDown: false,
    });
  };
  handleStopWatch = () => {
    this.setState({
      stopWatch: false,
    });
  };
  render() {
    return (
      <div className='App'>
        <h1>✌ Timer App ⏲ 🚀 Timers 🚀</h1>
        <div className='container'>
          <section className='box'>
            <button
              className={this.state.countDown ? 'hidden' : ''}
              onClick={() =>
                this.setState({
                  countDown: true,
                })
              }
            >
              Countdown
            </button>
            <div className={this.state.countDown ? '' : 'hidden'}>
              <Countdown handleClose={this.handleClose} />
            </div>
          </section>
          <section className='box'>
            <button
              className={this.setState.stopWatch ? 'hidden' : ''}
              onClick={() =>
                this.setState({
                  stopWatch: true,
                })
              }
            >
              Stopwatch
            </button>
            <div className={this.state.stopWatch ? '' : 'hidden'}>
              <Stopwatch handleStopWatch={this.handleStopWatch} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
