import { createContext } from 'react';
import useLocalStorage from '@rehooks/local-storage';

const LotteryContext = createContext();

const LotteryProvider = ({ children }) => {
  const [currentGift, setCurrentGift] = useLocalStorage('gift', '');

  return (
    <LotteryContext.Provider value={{ currentGift, setCurrentGift }}>
      {children}
    </LotteryContext.Provider>
  );
};

export default LotteryContext;
export { LotteryProvider };
