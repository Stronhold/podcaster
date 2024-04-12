export abstract class BaseAPI {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_ENDPOINT ?? '';
  }

  protected get(url: string): Promise<Response> {
    return fetch(`${this.baseUrl}${encodeURIComponent(url)}`, {
      method: 'GET',
    });
  }
}
