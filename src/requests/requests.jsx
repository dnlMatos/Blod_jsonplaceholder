import axios from "axios";
import { BASE_URL } from "../constants/base_url";

export const getPosts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

//EDPOINT DE EXCLUSÃO COM REQUISIÇÃO À API
export const delPost = async (id) => {
  try {
    return await axios
      .delete(`${BASE_URL}/posts/${id}`)
      .then((res) =>
        console.log(
          `Post excluído com sucesso com base no status ${res.status}`
        )
      );
  } catch (error) {
    throw new Error(error);
  }
};

//ENDPOINT DE BUSCA DO POST
export const findPost = async (userId) => {
  try {
    return await axios
      .get(`${BASE_URL}/posts:${userId}`)
      .then((res) =>
        console.log(
         res
        )
      );
  } catch (error) {
    throw new Error(error);
  }
};