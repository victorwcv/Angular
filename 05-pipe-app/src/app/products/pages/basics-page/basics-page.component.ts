import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  nameLower: string = 'fernando';
  nameUpper: string = 'GONZALEZ';
  nameTitle: string = 'esTO es UN TItulO';
  customDate: Date = new Date();
}
