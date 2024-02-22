import { LotteryProvider } from '../../context/LotteryProvider';
import Main from '../Main/Main';

const App = () => {
  return (
    <LotteryProvider>
      <Main />
    </LotteryProvider>
  );
};

export default App;
