import { useContext } from 'react';
import { useParams } from 'react-router';
import { LoginForm } from '../../components/LoginFom/LoginForm';
import { Shadow } from '../../components/Shadow/Shadow';
import { GlobalState } from '../../context/global.context';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import './FormLayaut.scss';

export const FormLayaut = () => {
    const { action } = useParams();
    const { currentUser } = useContext(GlobalState);

    const renderAction = () => {     
        if (action === 'signup') {
            return  <SignupForm />
        } 
        return <LoginForm />
    }

    return (
        <article id="login-section" className="login-section">
            <Shadow />
            {(currentUser.email !== "")
            ? ( <div>
                    <h1>Hello, <span>{currentUser.name ? currentUser.name : 'User'}</span>!</h1>
                </div>) 
            : ( <section className="login-form">
                {renderAction()}
            </section>)}       
        </article>
    );
};