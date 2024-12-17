import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  imports: [
    ButtonModule,
    MenuModule,
    MenubarModule,
  ],
  exports:[
    ButtonModule,
    MenuModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
