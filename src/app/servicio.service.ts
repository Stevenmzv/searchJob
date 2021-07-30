import { DataForm } from './components/save/save.component';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public data: DataForm[] = [];

  constructor() { }

  public getData(): DataForm[] {
    return this.data;
  }

  public setData(params: DataForm): void {
    this.data.push(params);
  }
}
