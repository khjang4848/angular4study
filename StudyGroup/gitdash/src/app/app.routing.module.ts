/**
 * Created by khjan on 3/19/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './HomeComponent';
import { LanguageComponent } from './LanguageComponent';
import { PersonComponent } from './PersonComponent';


const routes : Routes = [
  {path : '', redirectTo : '/Home', pathMatch : 'full'},
  {path : 'Home', component : HomeComponent},
  {path : 'Person/:id', component : PersonComponent},
  {path : 'Language', component : LanguageComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
