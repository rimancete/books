import axios from './axios.service';
import authHeader from './auth.header';
import { storage, StorageItemEnum } from '../lib/cache';

async function getBooks(page: number, booksPerPage: number) {
  loginPersistency();
  const auth = authHeader();

  const response = await axios.get(
    `/books?page=${page}&amount=${booksPerPage}`,
    {
      headers: auth,
    },
  );
  return response;
}

async function loginPersistency() {
  const refreshToken = { refreshToken: storage.get(StorageItemEnum.Token) };
  await axios
    .post('/auth/refresh-token', refreshToken)
    .then((response) =>
      storage.set(StorageItemEnum.Auth, response.headers['authorization']),
    );
}

export { getBooks };
