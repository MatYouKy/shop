import { FC, memo } from 'react';
import PropTypes from 'prop-types';
import { ButtonInterface } from '../../interfaces/UIInterface';
import classes from './Button.module.scss';

const Button: FC<ButtonInterface> = ({ name, type, disabled, onClick, extraClassName }) => (
  <button disabled={disabled} type={type} onClick={onClick} className={`${classes.button } ${extraClassName || extraClassName }`}>
    {name}
  </button>
);

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default memo(Button);