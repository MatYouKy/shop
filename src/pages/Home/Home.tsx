import { useNavigate } from 'react-router-dom';
import Shadow from '../../UI/Shadow/Shadow';
import classes from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <article id='home-section' className={classes.home}>
      <Shadow>
        <section className={classes.wrapper}>
          <div className={classes.img} />
          <div className={classes.blur} />
          <div className={classes.text}>
            <h1 className={classes['text-heading']}>welcome to the world!</h1>
            <p>in the best store of electronics</p>
            <button className={classes.button} type='button' onClick={() => navigate('products')}>
              check it
            </button>
          </div>
        </section>
      </Shadow>
    </article>
  );
};

export default Home;
