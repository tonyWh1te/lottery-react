import useLottery from '../../hooks/useLottery';
import HasGift from '../HasGift/HasGift';
import Lottery from '../Lottery';

const Main = () => {
  const { currentGift } = useLottery();

  if (currentGift) {
    return <HasGift id={currentGift} />;
  }

  return <Lottery />;
};

export default Main;
