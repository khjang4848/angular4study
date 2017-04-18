/**
 * Created by khjan on 4/13/2017.
 */
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {IntroComponent} from './intro.component';

import {NestedParentComponent} from './nested-component/parent.component';
import {ParentToChildInputComponent} from './parent-to-child-input/parent-to-child-input';
import {ParentToChildInputsComponent}
                        from './parent-to-child-inputs/parent-to-child-inputs.component';
import {ChildToParentComponent} from './child-to-parent/child-to-parent.component'
import {ViewchildComponent} from './viewchild/viewchild.component';

import { ViewchildrenComponent } from './viewchildren/viewchildren.component';

import { ContentChildComp } from './contentchild/contentchild.component';

import { ContentChildrenComp } from './contentchildren/contentchildren.component';

import { ComponentStyleComponent } from './component-style/component-style.component';


const appRoutes : Routes = [
    {path : '', component : IntroComponent},
    {path: 'nested-component', component: NestedParentComponent  },
    {path: 'parent-to-child-inputs', component: ParentToChildInputsComponent },
    {path: 'parent-to-child-input', component: ParentToChildInputComponent },
    {path: 'child-to-parent', component: ChildToParentComponent },
    {path: 'viewchild', component: ViewchildComponent  },
    {path: 'viewchildren', component: ViewchildrenComponent  },
    {path: 'contentchild', component: ContentChildComp  },
    {path: 'contentchildren', component: ContentChildrenComp  },
    { path: 'component-style', component: ComponentStyleComponent  },
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
