/**
 * Created by khjan on 2017-03-24.
 */
import {Injectable} from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TestData } from './TestData';

@Injectable()
export class LanguageService{
  private TestDataUrl = 'api/testDatas';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http : Http){}




}
