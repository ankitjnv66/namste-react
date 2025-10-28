import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

export const Body = () => {

    var listOfRestrauntJS = [
        {
            _id: {
                $oid: "57506d63f57802807471e41f1",
            },
            name: "Pizza Hut",
            contact: {
                phone: "454-555-0102",
                email: "pizzahut@example.com",
            },
            stars: 4,
            id: "1f",
        },
        {
            _id: {
                $oid: "57506d63f57802807471e41f2",
            },
            name: "CCD",
            contact: {
                phone: "454-555-0103",
                email: "pizzahut@example.com",
            },
            stars: 3,
            id: "2f",
        },
        {
            _id: {
                $oid: "57506d63f57802807471e41f1",
            },
            name: "MCD",
            contact: {
                phone: "454-555-0102",
                email: "pizzahut@example.com",
            },
            stars: 4.5,
            id: "3f",
        },
    ];

    // Local state variable
    const [listOfRestraunt, setListOfRestraunt] = useState(listOfRestrauntJS);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestraunt.filter((res) => res.stars > 3);
                        setListOfRestraunt(filteredList);
                    }}
                >
                    Top Rated Restraunts
                </button>
            </div>
            <div className="res-container">
                {listOfRestraunt.map((restraunt) => (
                    <RestaurantCard key={restraunt.id} resData={restraunt} />
                ))}
            </div>
        </div>
    );
};
