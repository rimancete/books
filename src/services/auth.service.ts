import { AuthenticateModel, UserModel } from '../interfaces/data';
import { storage, StorageItemEnum } from '../lib/cache';
import axios from './axios.service';

async function signIn(body: AuthenticateModel) {
  await axios.post<UserModel>('/auth/sign-in', body).then((response) => {
    storage.set(StorageItemEnum.Auth, response.headers['authorization']);
    storage.set(StorageItemEnum.User, response.data);
    return response.data;
  });
}

function getCurrentUser() {
  const user = storage.get(StorageItemEnum.User);
  return user;
}

async function logout() {
  storage.remove(StorageItemEnum.User);
  storage.remove(StorageItemEnum.Auth);
}

export { signIn, getCurrentUser, logout };
