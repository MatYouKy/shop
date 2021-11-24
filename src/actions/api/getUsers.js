export const getUsers = async () => {
    const url = `${process.env.PUBLIC_URL}/users.json`;
        const fetchData = await fetch(url)
        if(fetchData.ok) {
            const data = fetchData.json();
            return data
        } 
           throw Error
};
