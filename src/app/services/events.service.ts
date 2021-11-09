import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService {

  getEvents() {
    const events = this.http.get('/events')
    return events
  }

}
