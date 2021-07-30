import { DataForm } from './../save/save.component';
import { ServicioService } from './../../servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  public data: DataForm[] = [];
  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.data = this.servicio.getData();
  }
}
