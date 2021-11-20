import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMe } from 'src/app/interfaces/me';
import { removeAuthenticationToken } from 'src/app/utils/tokens';
import { getUserMe } from 'src/app/utils/user';
import { FormLoginModalComponent } from '../formLoginModal/form-login.modal.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  me: IMe = getUserMe()

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(FormLoginModalComponent);
  }

  signout() {
    removeAuthenticationToken()
    window.location.reload()
  }
}
