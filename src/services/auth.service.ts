import { AuthenticateModel, UserModel } from '../interfaces/data';
import { storage, StorageItemEnum } from '../lib/cache';
import axios from './axios.service';

async function signIn(body: AuthenticateModel) {
  const response = await axios
    .post<UserModel>('/auth/sign-in', body)
    .then((response) => {
      storage.set(StorageItemEnum.Auth, response.headers['authorization']);
      storage.set(StorageItemEnum.User, response.data);
    });
  return response;
}

function getCurrentUser() {
  const user: UserModel | undefined = storage.get(StorageItemEnum.User);
  return user;
}

async function logout() {
  storage.remove(StorageItemEnum.User);
  storage.remove(StorageItemEnum.Auth);
}

export { signIn, getCurrentUser, logout };
