import { useContext } from 'react';
import LotteryContext from '../context/LotteryProvider';

const useLottery = () => {
  return useContext(LotteryContext);
};

export default useLottery;
