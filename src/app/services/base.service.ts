import Axios from 'axios';

export class BaseService {
  baseUrl: string;
  http: any;

  constructor(api_url = 'http://localhost:8080', http = Axios) {
    this.baseUrl = api_url
    this.http = http.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
