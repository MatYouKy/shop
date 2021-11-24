const url = 'https://reqres.in/api/users';
// const url = `${process.env.PUBLIC_URL}/users.json`;

export const postUser = async (user = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user)
    });
    return response.json()
}