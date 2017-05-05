/**
 * Created by khjan on 5/5/2017.
 */
import {Injectable} from "@angular/core";
import {Children, ChildrenService} from "./children.service";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";

@Injectable()
export class ChildrenResolve implements Resolve<Children>{
    constructor(private cs : ChildrenService){}

    resolve(route : ActivatedRouteSnapshot) : Promise<Children>{
        let id = +route.params['id'];

        return this.cs.findNyId(id).then(children => {
            if(children){
                return children;
            }

            return null;
        });
    }
}
