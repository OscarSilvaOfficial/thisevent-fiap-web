import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IModalData } from "src/app/interfaces/modal";
import { setAuthenticationToken } from 'src/app/utils/tokens';
import { LoginService } from "src/app/services/login.service";
import { ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'form-login-modal-component',
  templateUrl: 'form-login.modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./form-login.modal.component.scss']
})
export class FormLoginModalComponent {
  hide = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IModalData, private authService: LoginService) {}

  async submitLoginForm(form: NgForm) {
    const res = await this.authService.signin(form.value);
    const token = res.headers['authentication-token']
    setAuthenticationToken(token)
    window.location.reload();
  }
}