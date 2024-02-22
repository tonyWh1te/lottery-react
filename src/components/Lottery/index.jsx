import { useState } from 'react';
import LotteryInner from './LotteryLayout/LotteryInner';
import Greeting from './Greeting/Greeting';

const Lottery = () => {
  const [isGreeting, setIsGreeting] = useState(true);

  return <>{isGreeting ? <Greeting setIsGreeting={setIsGreeting} /> : <LotteryInner />}</>;
};

export default Lottery;
