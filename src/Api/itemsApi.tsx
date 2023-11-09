import axios from "axios";

// const apiUrl = "https://www.bortakvall.se/api/v2/products";

export async function fetchData(api: string) {
    try {
        const response = await axios.get(api); // Make sure apiUrl is defined

        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

// function postData(post) {
//     axios
//         .post(orders, post)
//         .then(function (response) {
//             console.log("response data :", response.data);
//         })
//         .catch(function (error) {
//             console.log("Error: ", error);
//         });
// }

// axios
//     .get(apiUrl)
//     .then((response) => {
//         // Handle the successful response here
//         const userData = response.data.products;
//         console.log("User Data:", userData);
//     })
//     .catch((error) => {
//         // Handle any errors that occur during the request
//         console.error("Error:", error);
//     });
