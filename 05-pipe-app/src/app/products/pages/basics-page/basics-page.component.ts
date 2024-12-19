import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  nameLower = 'fernando';
  nameUpper = 'GONZALEZ';
  nameTitle = 'esTO es UN TItulO';
  customDate: Date = new Date();
}
