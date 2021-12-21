import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IModalData } from "src/app/interfaces/modal";
import { setAuthenticationToken } from 'src/app/utils/tokens';
import { LoginService } from "src/app/services/login.service";
import { ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'form-create-event-modal-component',
  templateUrl: 'form-create-event.modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./form-create-event.modal.component.scss']
})
export class FormCreateEventModalComponent {
  hide = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IModalData, private authService: LoginService) {}

  submitLoginForm(form: NgForm) {
    this.createEvent(form)
  }

  async createEvent(form: NgForm) {
    console.log(form.value)
  }
}