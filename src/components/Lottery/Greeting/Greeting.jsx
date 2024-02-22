import Wrapper from '../../Wrapper/Wrapper';
import styles from './Greeting.module.css';

const Greeting = ({ setIsGreeting }) => {
  const onClick = () => setIsGreeting(false);

  return (
    <Wrapper>
      <div className={styles.greeting}>
        <div className="container-wrapper">
          <div className={styles.inner}>
            <h2 className={styles.title}>Беспроигрышная лотерея</h2>
            <div className={styles.textWrapper}>
              <p className={styles.text}>Хочешь подарок?</p>
              <p className={styles.text}>Забирай свой!</p>
            </div>
            <button
              className={styles.button}
              onClick={onClick}
            >
              Забрать подарок
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Greeting;
