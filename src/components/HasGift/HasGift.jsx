import { useMemo } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from '../../hooks/useWindowSize';
import Wrapper from '../Wrapper/Wrapper';
import { gifts } from '../../utils/data';
import { star } from '../../assets';
import styles from './HasGift.module.css';

const HasGift = ({ id }) => {
  const { width, height } = useWindowSize();

  const gift = useMemo(() => gifts.find((gift) => gift.id === id), [id]);

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
      />
      <Wrapper>
        <div className={styles.hasGift}>
          <div className="container-wrapper">
            <div className={styles.inner}>
              <b className={styles.greeting}>Поздравляем!</b>
              <p className={styles.text}>
                Оставь отзыв <span>5 ЗВЕЗД</span> с фотографией товара, <span>ПРИШЛИ</span> скриншот
                с отзывом ниже по кнопке «Забрать подарок»
              </p>
              <ul className={styles.stars}>
                <li>
                  <img
                    src={star}
                    alt="star"
                  />
                </li>
                <li>
                  <img
                    src={star}
                    alt="star"
                  />
                </li>
                <li>
                  <img
                    src={star}
                    alt="star"
                  />
                </li>
                <li>
                  <img
                    src={star}
                    alt="star"
                  />
                </li>
                <li>
                  <img
                    src={star}
                    alt="star"
                  />
                </li>
              </ul>
              <p className={styles.text}>
                Ты выиграл: <span>{gift.name}</span>
              </p>
              <div className={styles.imgWapper}>
                <img
                  className={styles.img}
                  src={gift.img}
                  alt={gift.name}
                />
              </div>
              <a
                className={styles.button}
                href="https://t.me/avg95"
                target="_blank"
              >
                Забрать подарок
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HasGift;
