import { observable } from "mobx";
import a23664a from "assets/images/23664a.jpg";
import blog1 from "assets/images/blog1.png";
import blog2 from "assets/images/blog2.png";
import blog4 from "assets/images/blog4.png";
import blog3 from "assets/images/blog3.png";
import a124472a from "assets/images/124472a.jpg";
import pro_14626 from "assets/images/pro_14626.jpg"
import pro_20189 from "assets/images/pro_20189.jpg";
import pro_55389 from "assets/images/pro_55389.jpg";
import pro_68615 from "assets/images/pro_68615.jpg";

class BlogStore {
    @observable blogItems = [
        {
            image: blog1,
            title: "Gujarati Thali",
            desc: "Diwali Festival Food",
            name: "Diwali",
            writer: "Bhaumik",
            date: "January 20th, 2018",
            info: `Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart . Yes, Diwali is famous for
            its “mithai” or sweets, during that day each and every household will have a
            combination of freshly made snacks ranging from Jalebis to Gulab Jamun, Shankarpali
            to Kheer, Gajar Ka Halwa to Kaju barfi and many more. Along with this savoury
            dishes are also served.`,
        },
        {
            image: blog2,
            title: "Gujarati Thali",
            desc: "Diwali Festival Food",
            name: "Diwali",
            writer: "Bhaumik",
            date: "January 20th, 2018",
            info: `Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart . Yes, Diwali is famous for
            its “mithai” or sweets, during that day each and every household will have a
            combination of freshly made snacks ranging from Jalebis to Gulab Jamun, Shankarpali
            to Kheer, Gajar Ka Halwa to Kaju barfi and many more. Along with this savoury
            dishes are also served.`,
        },
        {
            image: blog3,
            title: "Gujarati Thali",
            desc: "Diwali Festival Food",
            name: "Diwali",
            writer: "Bhaumik",
            date: "January 20th, 2018",
            info: `Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart . Yes, Diwali is famous for
            its “mithai” or sweets, during that day each and every household will have a
            combination of freshly made snacks ranging from Jalebis to Gulab Jamun, Shankarpali
            to Kheer, Gajar Ka Halwa to Kaju barfi and many more. Along with this savoury
            dishes are also served.`,
        },
        {
            image: blog4,
            title: "Gujarati Thali",
            desc: "Diwali Festival Food",
            name: "Diwali",
            writer: "Bhaumik",
            date: "January 20th, 2018",
            info: `Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart . Yes, Diwali is famous for
            its “mithai” or sweets, during that day each and every household will have a
            combination of freshly made snacks ranging from Jalebis to Gulab Jamun, Shankarpali
            to Kheer, Gajar Ka Halwa to Kaju barfi and many more. Along with this savoury
            dishes are also served.`,
        },
        {
            image: blog3,
            title: "Gujarati Thali",
            desc: "Diwali Festival Food",
            name: "Diwali",
            writer: "Bhaumik",
            date: "January 20th, 2018",
            info: `Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart . Yes, Diwali is famous for
            its “mithai” or sweets, during that day each and every household will have a
            combination of freshly made snacks ranging from Jalebis to Gulab Jamun, Shankarpali
            to Kheer, Gajar Ka Halwa to Kaju barfi and many more. Along with this savoury
            dishes are also served.`,
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
}

export default BlogStore;