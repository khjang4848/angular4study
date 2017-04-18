/**
 * Created by khjan on 2017-04-18.
 */
import { Injectable} from '@angular/core';
import { USERS} from './mock-user';
import { User} from './user';

@Injectable()
export class MockService{
    getUser() : Promise<User[]>{
        return Promise.resolve(USERS);
    }

    getUserDelay() : Promise<User[]>{
        return new Promise<User[]>(resolve => setTimeout(resolve, 5000))
            .then(()=>this.getUser());
    }

    getRequest(status : boolean) : Promise<any>{
        if(status){
            return Promise.resolve("요청을 승낙합니다").then(function(reason){
                return reason;
            }, function(){
                return "NO";
            });
        }
        else{
            return Promise.resolve("요청을 거부합니다").then(function(){
                return "YES";
            }, function(reason){
                return reason;
            });
        }
    }
}
