/**
 * Created by khjan on 3/23/2017.
 */
import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name : 'myfilter',
  pure : false
})

@Injectable()
export class MyFileterPipe implements PipeTransform{
  transform(items : any[], args : string) : any{

    if(!args)   return items;
    if(args == "") return items;

    return items.filter(item => {
      if(item.login) return item.login.indexOf(args) != -1;
      if(item.name) return item.name.indexOf(args) != -1;
    });
  }
}
