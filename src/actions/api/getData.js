export const getData = async url => {
    const getFetch = await fetch(url)
    const json = getFetch.json()
    return json;
}
