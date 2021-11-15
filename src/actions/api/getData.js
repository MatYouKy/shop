export const getData = (URL) => {
    const fetchItems = async (url) => {
        const data = await fetch(url);
        const items = await data.json();
        return items;
    }
    return fetchItems(URL)
}