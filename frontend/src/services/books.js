import axios from "axios";
const baseUrl = "api/books";

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addBook = async (newBook) => {
  try {
    const response = await axios.post(baseUrl, newBook);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateBook = async (id, newBook) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newBook);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default { getAll, deleteBook, addBook, updateBook };
