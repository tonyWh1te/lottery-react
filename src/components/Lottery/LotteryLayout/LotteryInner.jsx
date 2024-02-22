import { useRef } from 'react';
import useLottery from '../../../hooks/useLottery';
import Wrapper from '../../Wrapper/Wrapper';
import { gift as giftImg } from '../../../assets';
import { distributeGifts } from '../../../utils/lottery.helper';
import styles from './LotteryInner.module.css';

const LotteryInner = () => {
  const { setCurrentGift } = useLottery();
  const gifts = distributeGifts();

  const giftRefs = useRef([]);

  const onClick = (gift, index) => {
    return () => {
      giftRefs.current[index].classList.add(styles.active);

      setTimeout(() => {
        setCurrentGift(gift);
      }, 900);
    };
  };

  return (
    <Wrapper>
      <div className={styles.lottery}>
        <div className="container-wrapper">
          <h2 className={styles.title}>А теперь забери свой приз!</h2>
          <ul className={styles.gifts}>
            {gifts.map((gift, i) => (
              <li
                key={i}
                className={styles.gift}
                onClick={onClick(gift, i)}
                ref={(el) => (giftRefs.current[i] = el)}
              >
                <img
                  className={styles.img}
                  src={giftImg}
                  alt="gift"
                />
                <span>{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default LotteryInner;
