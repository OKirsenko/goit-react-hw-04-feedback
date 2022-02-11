import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notitfication';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good * 100) / total);

  function onClick(e) {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  }

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onClick={onClick} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}
