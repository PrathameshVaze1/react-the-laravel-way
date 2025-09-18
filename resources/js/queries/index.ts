import { Puppy } from "../types";

export async function getPuppies() {
  try {
    const response = await fetch("https://react-from-scratch-api.test/api/puppies", {
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function toggleLikedByStatus(id: number){
  try {
    const response = await fetch(`https://react-from-scratch-api.test/api/puppies/${id}/like`, {
      method: "PATCH",
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function addPuppy(formData: FormData){
  try {
    const response = await fetch("https://react-from-scratch-api.test/api/puppies", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}