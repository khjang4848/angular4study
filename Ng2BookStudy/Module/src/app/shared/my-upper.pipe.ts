/**
 * Created by khjan on 2017-04-23.
 */
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'myupper'})
export class MyUpperPipe implements PipeTransform{
    transform(pharse : string){
        return pharse.toUpperCase();
    }
}
