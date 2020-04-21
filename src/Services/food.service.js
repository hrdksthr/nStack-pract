import APIProvider from "./../APIProvider";

const headers = {
    "Content-type": "application/octet-stream",
    "x-rapidapi-host": "http://edamam-food-and-grocery-database.p.rapidapi.com/",
    "x-rapidapi-key":"ea08be3fc6msh420291768b58982p13f2c5jsn6915183d2a2e",
};


class FoodService {
    getList = (ingr) => {
        return APIProvider.get("parser" , {
            ingr 
        }, headers)
    };
}

export default new FoodService()