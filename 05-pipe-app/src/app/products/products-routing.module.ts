import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { CommonsPageComponent } from './pages/commons-page/commons-page.component';

const routes: Routes = [
  { 
    path: '',
    component: BasicsPageComponent 
  },
  { 
    path: 'numbers',
    component: NumbersPageComponent
  },
  { 
    path: 'commons',
    component: CommonsPageComponent
  },
  { 
    path: '**',
    component: BasicsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
