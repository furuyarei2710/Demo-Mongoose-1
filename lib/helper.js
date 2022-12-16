// lib helper
 
const BASE_URL = "http://localhost:3000";
 
 
// all users
export const getUsers = async () => {
    const response = await fetch (`${BASE_URL}/api/users`)
    const json = await response.json();
 
    return json;
}
 
// single user
export const getUser = async (userID) => {
    const response = await fetch (`${BASE_URL}/api/users/${userID}`)
    const json = await response.json();
 
    if(json) return json;
    return json;
}
 
// posting user
export async function createUser(formData) {
    try {
        const Options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
 
        const response = await fetch (`${BASE_URL}/api/users`, Options)
        const json = await response.json();
 
        return json ;
    } catch (error) {
       
    }
}
 
// Update a new user
export async function updateUser(userID, formData){
    try {
        const Options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
 
        const response = await fetch (`${BASE_URL}/api/users/${userID}`, Options)
        const json = await response.json();
 
        return json ;
    } catch (error) {
       
    }
}
 
// Delete a user
export async function deleteUser(userID){
    try {
        const Options = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        }
 
        const response = await fetch (`${BASE_URL}/api/users/${userID}`, Options)
        const json = await response.json();
 
        return json ;
    } catch (error) {
       
    }
}
