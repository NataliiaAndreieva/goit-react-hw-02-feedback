import React, { Component } from 'react';
// import FeedbackOptions from './FeedbackOptions';
// import Section from './Section';
// import Notification from './Notification';
// import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const option = event.target.name;
    this.setState((prevState) => ({
        [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = Math.round((good / this.countTotalFeedback()) * 100);
    return percentage;
  };

  render() {
    //   const { good, neutral, bad } = this.state;
    //   const countTotalFeedback = this.countTotalFeedback();
    //   const countPositiveFeedbackPercentage =
    //     this.countPositiveFeedbackPercentage;
    //   return (
  
    <div>
      {/* <Section title="Please leave feedback">
          <FeedbackOptions
            onOptions={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section> */}

      {/* <Section title="Statistics">
          {countTotalFeedback ? 
             (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
              />
             ) :
                (
            <Notification message="There is no Feedback" />
          ) 
          }
        </Section> */}
    </div>
//     );
  // }
}


