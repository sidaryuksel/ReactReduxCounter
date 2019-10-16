export const fetchUsers = async () => {
    try {
        const response = await fetch("http://localhost:4000/users");
        const data = await response.json(response);
        console.log("data:", data);
        return data;
    } catch (e) {
        console.log(e);
    }
};
