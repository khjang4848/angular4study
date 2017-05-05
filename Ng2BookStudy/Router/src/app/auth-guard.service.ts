import {Injectable} from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate, CanActivateChild, NavigationExtras, Router,
    RouterStateSnapshot
} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService : AuthService, private router : Router){}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean{
        let url : string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot)
    : boolean{
        return this.canActivate(route, state);
    }

    checkLogin(url : string) : boolean{
        if (this.authService.isLogin) { return true; }
        this.authService.redirectUrl = url;
        let sessionId = 1234;

        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}
