import { Component } from '@angular/core';

@Component({
  selector: 'app-commons-page',
  templateUrl: './commons-page.component.html',
})
export class CommonsPageComponent {
  // i18 Select
  name: string = 'Fernando';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }
}
