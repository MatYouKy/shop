import { FC } from 'react';

export const Welcome: FC<{ name: string }> = ({ name }) => <h1>{`Hello, ${name || 'User'}!`}</h1>;
