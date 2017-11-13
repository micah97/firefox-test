import { AppComponent } from '../app.component';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [

  {path: 'home', component: AppComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
