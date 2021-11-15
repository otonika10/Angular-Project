import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private reg:RegService) { }
  arr:any[]=[]
  ngOnInit(): void {
    this.reg.getdatastats().subscribe((res:any)=>{console.log(res);
      this.arr = res.data;
      });
  }
  show(){
  }
}
