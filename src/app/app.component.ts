import { Component, OnInit } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  events: any = [];

  constructor(private eventsService: EventsService) {}
    
  ngOnInit() {
    this.allEvents();
  }

  async allEvents(): Promise<void> {
    const allEvents = await this.eventsService.getEvents();
    this.events = allEvents.data;
    console.log(this.events);
  }

}
