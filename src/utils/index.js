import client from "./client";
import { getUsersQuery } from "./queries";

export const fetchUsers = async () => {
  const query = getUsersQuery();
  try {
    const data = await client.fetch(query);
    console.log("data: ", data);
  } catch (error) {
    console.log("Error fetching users: ", error);
  }
}