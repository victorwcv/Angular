import { Component } from '@angular/core';

@Component({
  selector: 'app-commons-page',
  templateUrl: './commons-page.component.html',
})
export class CommonsPageComponent {
  // i18 Select
  name = 'Fernando';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  // i18nPlural
  clientes: string[] = [
    'Maria',
    'Victor',
    'Pedro',
    'Juan',
    'Roberto',
    'Carlos',
  ];

  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clientes.shift();
  }
}
