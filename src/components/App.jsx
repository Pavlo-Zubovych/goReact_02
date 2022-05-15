import { Component } from "react";

import Container from "./Container";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Statistics from "./Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (options) => {
    this.setState((prevState) => ({ [options]: prevState[options] + 1}))
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  positiveFeedback = () => {
    const {good} = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const stateOptions = Object.keys(this.state);
    const {good, neutral, bad} = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.positiveFeedback();

    return(
      <Container>
        <Section title ='Please leave feadback' >

          <FeedbackOptions
            options={stateOptions}
            onLeaveFeedback={this.leaveFeedback}
          />

        </Section>

        <Section title = 'Statistics'>

          { totalFeedback === 0 ? (
          <Notification mesege="The is no feedback" />
          ) : (
            <Statistics 
              good ={good} 
              neutral={neutral} 
              bad={bad} 
              total={totalFeedback} 
              positivePersentage ={positiveFeedback} 
            />
          )}
        </Section>
      </Container>
    );
  }
}

//..
export default App;


