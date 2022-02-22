import { FC } from 'react';
import './Shadow.scss';

const Shadow: FC<{ children: any }> = ({ children }) => <div className='shadow'>{children}</div>;
export default Shadow;
