/**
 * Created by khjan on 2017-03-12.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './HomeComponent';
import { PersonComponent} from './PersonComponent';
import { ForkComponent} from './ForkComponent';
import { StarComponent} from './StarComponent';
import { LanguageComponent} from './LanguageComponent';

const routes : Routes = [
    {path : '', redirectTo : '/Home', pathMatch : 'full'},
    {path : 'Home', component : HomeComponent},
    {path : 'Person', component : PersonComponent},
    {path : 'Fork', component : ForkComponent},
    {path : 'Star', component : StarComponent},
    {path : 'Language', component : LanguageComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}