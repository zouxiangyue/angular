import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { LogService } from './log.service';

 @Injectable({
  providedIn: 'root'
}) 
export class Common2Service implements CommonService {
  set(key,value){
    this.log.log('set')
    return localStorage.setItem(key,value);
  }
  get(key){
    this.log.log('get')
    return localStorage.getItem(key);
  }

  constructor(private log:LogService) { }
}
