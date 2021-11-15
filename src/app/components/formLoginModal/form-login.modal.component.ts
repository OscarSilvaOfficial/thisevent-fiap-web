import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IModalData } from "src/app/interfaces/modal";
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'form-login-modal-component',
  templateUrl: 'form-login.modal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FormLoginModalComponent {
  hide = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: IModalData) {}
}