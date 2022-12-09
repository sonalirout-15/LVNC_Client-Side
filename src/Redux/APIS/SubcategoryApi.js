import axios from "axios";

// const token = JSON.parse((JSON.stringify(localStorage.getItem("ADMIN"))))
// const headersParam = {
//     Authorization: `Bearer ${token}`,
// };

export const loadSubcategoryApi = async () =>
    await axios.get('http://localhost:8080/api/subcategories/')