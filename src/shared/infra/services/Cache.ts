import { BaseDTO } from '../../../modules/podcast/dtos/baseDTO';

export class CacheAPI {
  private cacheName: string;
  private cacheDuration: number;

  constructor(cacheName: string, cacheDuration: number) {
    this.cacheDuration = cacheDuration;
    this.cacheName = cacheName;
  }

  public async getCacheValue(request: string): Promise<BaseDTO | null> {
    if (window.caches) {
      const result = await window.caches.match(request);
      if (!result) return null;
      const response: BaseDTO = await result.json();
      if (
        response.date &&
        new Date().getTime() - response.date >= this.cacheDuration
      )
        return null;
      return response;
    }
    return null;
  }

  public async saveCache(requestUrl: string, response: object) {
    if (window.caches) {
      const cache = await window.caches.open(this.cacheName);
      await cache.put(
        requestUrl,
        new Response(
          JSON.stringify({
            date: new Date().getTime(),
            ...response,
          }),
        ),
      );
    }
  }
}
