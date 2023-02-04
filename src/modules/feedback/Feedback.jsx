import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbacks;
    if (!total) return 0;
    const percentage = ((good / total) * 100).toFixed(2);
    return Number(percentage);
  };

  const onLeaveFeedback = name => {
    setFeedbacks(prevState => {
      const value = prevState[name];

      return { ...prevState, [name]: value + 1 };
    });
  };

  const value = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={total}
            positivePercentage={value}
          />
        )}
      </Section>
    </div>
  );
};

export default Feedback;

/*
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (!total) return 0;
    const percentage = ((good / total) * 100).toFixed(2);
    return Number(percentage);
  }

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const value = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={value}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
*/
