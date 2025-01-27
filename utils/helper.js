
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

const sortData = (array, direction) => {
    return[...array].sort((a,b) => {
        if (direction === "Hight to Low") {
            a.price - b.price
        }
        if (direction === "Low to Hight") {
            b.price - a.price
        }
        return 0
    })
}

const searchData = (array, searchTerm) => {
    if (!searchTerm) searchTerm = ""; // searchTerm undefined বা null হলে খালি স্ট্রিং সেট করুন

    return [...array].filter((item) => 
        item.title && typeof item.title === "string" && 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
};


export {fetchSearchResult, sortData, searchData};