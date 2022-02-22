import axios from './axios.service';
import authHeader from './auth.header';
import { storage, StorageItemEnum } from '../lib/cache';

async function getBooks(page: number, booksPerPage: number) {
  const refreshToken = { refreshToken: storage.get(StorageItemEnum.Token) };
  await axios
    .post('/auth/refresh-token', refreshToken)
    .then((response) =>
      storage.set(StorageItemEnum.Auth, response.headers['authorization']),
    );

  const auth = authHeader();

  const response = await axios.get(
    `/books?page=${page}&amount=${booksPerPage}`,
    {
      headers: auth,
    },
  );
  return response;
}
// async function getBooksById(id = '61c9c28fcc498b5c08845d47') {
//   const auth = authHeader();
//   if (auth.Authorization) {
//     const response = await axios.get(`/books/${id}`, {
//       headers: authHeader(),
//     });
//     return response.data;
//   }
// }

export { getBooks };
