import axios from "axios";
const baseUrl = "api/books";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const deleteBook = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, deleteBook };
