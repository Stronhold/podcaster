import { BaseDTO } from '../../../modules/podcast/dtos/baseDTO';
import { CacheAPI } from './Cache';

export abstract class BaseAPI {
  protected baseUrl: string;
  private cache: CacheAPI;

  constructor(cacheName?: string, cacheTime?: number) {
    this.baseUrl = import.meta.env.VITE_API_ENDPOINT ?? '';
    if (cacheName && cacheTime) this.cache = new CacheAPI(cacheName, cacheTime);
  }

  public getRequestUrl(url: string): string {
    return `${this.baseUrl}${encodeURIComponent(url)}`;
  }

  protected async get(url: string): Promise<BaseDTO> {
    const completeUrl = this.getRequestUrl(url);
    let result = this.cache
      ? await this.cache.getCacheValue(completeUrl)
      : null;

    if (!result) {
      result = await (
        await fetch(completeUrl, {
          method: 'GET',
          credentials: 'include',
        })
      ).json();
      this.cache && result && this.cache.saveCache(completeUrl, result);
    }
    if (!result) {
      throw Error('no results found');
    }
    return result;
  }
}
