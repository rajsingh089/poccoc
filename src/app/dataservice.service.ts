import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  public data: any = [];

  public getData(): any {
    return this.data;
  }

  public setData(records: any): void {
    this.data.push(records);
  }
}
