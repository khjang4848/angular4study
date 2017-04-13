import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

import { Subject } from 'rxjs/Subject';

@Component({
  moduleId : module.id,
  selector : 'my-app',
  templateUrl : 'app.component.html'
})

export class AppComponent {
  title = "GitHub Tours";

  constructor(private events : Events){}

  search(key : string) : void{
    if(key){
      this.events.publish('app', key);
    }

  }
}
