import ItemBadge from "../Components/ItemBadge";
import { fetchData } from "../Api/itemsApi";
import React, { useEffect, useState } from "react";
import { ApiData } from "../Helpers/typeIndex";

function StartPage() {
    const [data, setData] = useState([]);
    const apiUrl = "https://www.bortakvall.se/api/v2/products";

    useEffect(() => {
        fetchData(apiUrl)
            .then((result) => {
                setData(Object.values(result.data));

                console.log(result.data);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }, []);

    useEffect(() => {}, [data]);

    return (
        <div className="flex flex-wrap justify-center">
            {data.length > 0 ? (
                data.map((items: ApiData) => (
                    <div key={items.id}>
                        <ItemBadge
                            key={items.id}
                            image={items.images.thumbnail}
                            name={items.name}
                            price={items.price}
                        />
                    </div>
                ))
            ) : (
                <p>Loading Candy</p>
            )}
        </div>
    );
}

export default StartPage;
