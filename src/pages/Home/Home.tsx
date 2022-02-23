import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import classes from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <article id='home-section' className={classes.home}>
        <section className={classes.text}>
          <h1 className={classes['text-heading']}>welcome to the world!</h1>
          <p>in the best store of electronics</p>
          <Button 
            type='button' 
            onClick={() => navigate('/products')} 
            name='check it' 
            extraClassName={classes.button}
          />
        </section>
    </article>
  );
};

export default Home;
