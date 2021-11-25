import { useContext } from 'react';
import { useParams } from 'react-router';
import { LoginForm } from '../../components/LoginFom/LoginForm';
import { Shadow } from '../../components/Shadow/Shadow';
import { AuthContext } from '../../context/Auth.context';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import './FormLayaut.scss';

export const FormLayaut = () => {
    const { action } = useParams();
    const { currentUser } = useContext(AuthContext);

    const renderAction = () => {     
        if (action === 'signup') {
            return  <SignupForm />
        } 
        return <LoginForm />
    }

    return (
        <article id='login' className='login'>
            <Shadow />
            {(currentUser.email !== "")
            ? ( <div className='login__welcome'>
                    <h1>Hello, <span>{currentUser.name ? currentUser.name : 'User'}</span>!</h1>
                </div>) 
            : ( <section className='login__form'>
                {renderAction()}
            </section>)}       
        </article>
    );
};