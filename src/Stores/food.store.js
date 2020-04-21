import { observable } from "mobx";
import foodService from "../Services/food.service";
import { message } from "antd";
import BeverageImage from "assets/images/Beverages.png";
import Canned from "assets/images/Canned_and_Packaged.png";
import Condiments from "assets/images/Condiments.png";
import Festival from "assets/images/Festival.png";
import FreezerFoods from "assets/images/Freezer_Foods.png";
import Groceries from "assets/images/Groceries.png";
import HealthBeauty from "assets/images/Health_Beauty.png";
import Instant_Food from "assets/images/Instant_Food.png";
import Kitchen from "assets/images/kitchen.png";
import a23664a from "assets/images/23664a.jpg";
import a124472a from "assets/images/124472a.jpg";
import pro_14626 from "assets/images/pro_14626.jpg"
import pro_20189 from "assets/images/pro_20189.jpg";
import pro_55389 from "assets/images/pro_55389.jpg";
import pro_68615 from "assets/images/pro_68615.jpg";

class FoodStore {
    @observable isFetchingList = true;
    @observable trendingFoods = [];
    @observable categories = [
        {
            name: "Beverage",
            image: BeverageImage
        },
        {
            name: "Canned & Packaged",
            image: Canned
        },
        {
            name: "Condiments",
            image: Condiments
        },
        {
            name: "Festival",
            image: Festival
        },
        {
            name: "Freezer & Foods",
            image: FreezerFoods
        },
        {
            name: "Groceries",
            image: Groceries
        },
        {
            name: "Health & Beauty",
            image: HealthBeauty
        },
        {
            name: "Instant Food",
            image: Instant_Food
        },
        {
            name: "Kitchen",
            image: Kitchen
        },
    ]
    @observable fooditems = [
        {
            share: "12k",
            view: "12k",
            bag: "12k",
            ios_star: "12k",
            ios_chat: "12k",
            name: "Aashirvaad Shudh Chakki Whole Wheat Atta",
            weight: 12,
            cut_price: 15.99,
            price: 15.99,
            image: a23664a
        },
        {
            share: "12k",
            view: "12k",
            bag: "12k",
            ios_star: "12k",
            ios_chat: "12k",
            name: "Grain And Oil Seed",
            weight: 12,
            cut_price: 15.99,
            price: 15.99,
            image: a124472a
        },
        {
            share: "12k",
            view: "12k",
            bag: "12k",
            ios_star: "12k",
            ios_chat: "12k",
            name: "Organic Produce",
            weight: 12,
            cut_price: 15.99,
            price: 15.99,
            image: pro_14626
        },
        {
            share: "12k",
            view: "12k",
            bag: "12k",
            ios_star: "12k",
            ios_chat: "12k",
            name: "Vegetables",
            weight: 12,
            cut_price: 15.99,
            price: 15.99,
            image: pro_20189
        },
        {
            share: "12k",
            view: "12k",
            bag: "12k",
            ios_star: "12k",
            ios_chat: "12k",
            name: "Grain And Oil Seed",
            weight: 12,
            cut_price: 15.99,
            price: 15.99,
            image: pro_55389
        },
        {
            share: "12k",
            view: "12k",
            bag: "12k",
            ios_star: "12k",
            ios_chat: "12k",
            name: "Organic Produce",
            weight: 12,
            cut_price: 15.99,
            price: 15.99,
            image: pro_68615
        }
    ]

    getFoodList = async (ingr) => {
        try {
            this.isFetchingList = true;
            const res = await foodService.getList(ingr);
            console.log(res)
            this.isFetchingList = false;
            this.trendingFoods = res.hints.filter(item => item.food && item.food.image && item.food.image.indexOf('http') > -1)
        } catch (error) {
            message.error("Please try again", 2)
        }
    }
}

export default FoodStore;