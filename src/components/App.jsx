import  React, { useState } from 'react';

import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import {Statistics} from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

// const handleClick = event => {
//   const {name} = event.target.textContent;

//   switch(name) {
//     case 'good': 
//     setGood (prev => prev + 1);
//     break;
//     case 'neutral': 
//     setNeutral (prev => prev + 1);
//     break;
//     case 'bad': 
//     setBad (prev => prev + 1);
//     break;
//     default:
//       return;
//   }
// };
const handekClickGood = () => {
  setGood (prev => prev + 1);
}
const handekClickNeutral = () => {
  setNeutral (prev => prev + 1);
}
const handekClickBad = () => {
  setBad (prev => prev + 1);
}

const countTotalFeedback = () => {
  return good + neutral + bad;
}

const countPositiveFeedbackPercentage = () => {
  return ((good * 100) / countTotalFeedback()).toFixed(0);
}

  return(
  <>
    <Section title="Please leave feedback">
      <FeedbackOptions handekClickGood={handekClickGood} handekClickNeutral={handekClickNeutral} handekClickBad={handekClickBad}/>
    </Section>
    <Section title="Statistic">
        {countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) :
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />)}
      </Section>
    </>
  )
}