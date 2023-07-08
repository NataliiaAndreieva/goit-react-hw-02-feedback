import React, { Component } from 'react';
import FeedbackOptions from 'components/feedbackOptions';

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
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          onOptions={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedback}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage}</p>
      </div>
    );
  }
}



{/* <Section Title={'Statistics'}>
    
</Section> 

<Section title={'Please leave feedback'} >

</Section> 
*/}
