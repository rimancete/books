import axios from './axios.service';
import authHeader from './auth.header';

const auth = authHeader();

async function getBooks(page: number, booksPerPage: number) {
  if (auth.Authorization) {
    const response = await axios.get(
      `/books?page=${page}&amount=${booksPerPage}`,
      {
        headers: auth,
      },
    );
    return response;
  }
}
// id "61c9c28fcc498b5c08845ce3"
async function getBooksById(id = '61c9c28fcc498b5c08845d47') {
  if (auth.Authorization) {
    const response = await axios.get(`/books/${id}`, {
      headers: authHeader(),
    });
    return response.data;
  }
}

export { getBooks, getBooksById };
