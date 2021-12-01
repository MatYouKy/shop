import { useState, useEffect } from 'react';

export const useGetUsers = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/users.json`)
            .then(res => res.json())
            .then(data => setUsers(data))
            // eslint-disable-next-line no-console
            .catch(err => console.log('Error in get users', err))
    }, []);
    return { users }
}