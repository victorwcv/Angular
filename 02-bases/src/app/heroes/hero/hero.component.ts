import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public heroName: string = 'ironman';
  public realName: string = 'Tony Stark';
  public edad: number = 45;
}
