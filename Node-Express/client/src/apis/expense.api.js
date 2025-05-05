import { BASE_URL } from "../utils/url";

export async function addAnExpense(values, id) {
  try {
    const response = await fetch(`${BASE_URL}/expense`, {
      method: "POST",
      body: JSON.stringify({ ...values, user: id }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const addedExpense = await response.json;
    return addedExpense;
  } catch (error) {
    console.log(error);
  }
}

export async function getExpense(user) {
  try {
    const response = await fetch(`${BASE_URL}/expense/${user._id}`);
    const expense = await response.json();

    return expense;
  } catch (error) {
    console.log(error);
  }
}
