import { FC, ReactNode, memo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.scss';
import Badge from '../../../UI/Badge/Badge';

type NavItemType = {
  to: string,
  name: string,
  icon?: ReactNode,
  badge?: number | null,
  onClick?: () => void
};

const NavItem: FC<NavItemType> = ({ to, name, icon, badge, onClick }) => (
  <li className={classes.item} role='none'>
    <NavLink to={to} className={classes['nav-link']} onClick={onClick}>
      {icon && <span className={classes.icon}>{icon || null}</span>}
      <span>{name}</span>
      {badge && <Badge />}
    </NavLink>
  </li>
);

NavItem.defaultProps = {
  icon: undefined,
  badge: undefined,
  onClick: () => {}
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element,
  badge: PropTypes.number,
  onClick: PropTypes.func
};

export default memo(NavItem);
