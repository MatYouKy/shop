export const getData = url => fetch(url)
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('getData Error')
    })
    .then(data => data)
    // eslint-disable-next-line no-console
    .catch(err => console.error('Error in getData', err))
