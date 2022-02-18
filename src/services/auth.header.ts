import { storage, StorageItemEnum } from '../lib/cache';
import { AxiosRequestHeaders } from 'axios';

export default function authHeader(): AxiosRequestHeaders {
  const user = storage.get(StorageItemEnum.User);
  const auth = storage.get(StorageItemEnum.Auth);
  try {
    if (!user || typeof auth !== 'string') throw new Error('User disconnected');
    return {
      Authorization: `Bearer ${auth}`,
    };
  } catch {
    return {};
  }
}
