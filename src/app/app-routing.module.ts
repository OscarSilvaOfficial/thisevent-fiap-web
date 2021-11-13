import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './views/events/events.component'

const routes: Routes = [
  { path: 'home', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
