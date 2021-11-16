import { Component, OnInit } from '@angular/core';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private reg:RegService) { }
  players:any[]=[]
  arr:any[]=[]
  arr1:any[]=[]
  arr2:any[]=[]
  ngOnInit(): void {
    this.reg.getdatagames().subscribe((res:any)=>{console.log(res);
      this.arr = res.data;
      });
      this.reg.getdataplayers().subscribe((res:any)=>{console.log(res);
        this.players = res.data;
        });
        this.reg.getdatastats().subscribe((res:any)=>{console.log(res);
          this.arr1 = res.data;
          });
          this.reg.getdata().subscribe((res:any)=>{console.log(res);
            this.arr2 = res.data;
            });
  }
}
