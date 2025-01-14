const fetchSearchResult = async (api) => {
    try {
        const response = await fetch(api) 
        if (!response.ok) {
            throw new Error("fetch data is messing");
        }
        const data = response.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export {fetchSearchResult};