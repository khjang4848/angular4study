import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroComponent} from './intro.component';
import { routing, appRoutingProviders} from './app.routing';

import { NestedParentComponent } from './nested-component/parent.component';
import { NestedChildComponent } from './nested-component/child.component';
import { NestedGrandsonComponent } from './nested-component/grandson.component';

import { ChildInputComponent } from './parent-to-child-input/child-input.component';
import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input';

import { ChildInputsComponent} from './parent-to-child-inputs/child-inputs.component';
import { ParentToChildInputsComponent}
                        from './parent-to-child-inputs/parent-to-child-inputs.component';

import { ChildComponent} from './child-to-parent/child.component';
import { ChildToParentComponent} from './child-to-parent/child-to-parent.component';

import { ViewchildComponent, Item, ItemComponent } from './viewchild/viewchild.component';

import { ViewchildrenComponent, ChildCmp } from './viewchildren/viewchildren.component';

import { GroupTitle, childButtonCmp, ButtonGroup, ContentChildComp}
                                    from './contentchild/contentchild.component';

import { Word, WordGroup, ContentChildrenComp} from './contentchildren/contentchildren.component';

import { ComponentStyleComponent} from './component-style/component-style.component';
import { FirstDepthComponent} from './component-style/first-depth.component';
import { SecondDepthComponent} from './component-style/second-depth.component';
@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        NestedParentComponent, NestedChildComponent, NestedGrandsonComponent,
        ChildInputComponent, ParentToChildInputComponent,
        ChildInputsComponent, ParentToChildInputsComponent,
        ChildComponent, ChildToParentComponent,
        ViewchildComponent, Item, ItemComponent,
        ViewchildrenComponent, ChildCmp,
        GroupTitle, childButtonCmp, ButtonGroup, ContentChildComp,
        Word, WordGroup, ContentChildrenComp,
        ComponentStyleComponent, FirstDepthComponent, SecondDepthComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
