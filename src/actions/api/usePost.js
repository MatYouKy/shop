export const postData = async (URL='', data={}) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
}