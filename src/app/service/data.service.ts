import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sdata="services data"
  constructor() { }

  checkata(){
  return "hello hi"
  }
}
