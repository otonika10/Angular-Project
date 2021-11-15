
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegService {
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http
    .get<any>('https://free-nba.p.rapidapi.com/teams/?rapidapi-key=e71f3245f8msh7f301bd86bc7f78p11862cjsn9106b3b38be4'
    )
    .pipe(map((res:any)=>{return res;}),
    catchError((err)=>{return err})
    );
  }
  getdatastats(){
    return this.http
    .get<any>('https://free-nba.p.rapidapi.com/stats/?rapidapi-key=e71f3245f8msh7f301bd86bc7f78p11862cjsn9106b3b38be4'
    )
    .pipe(map((res:any)=>{return res;}),
    catchError((err)=>{return err})
    );
  }
  getdatagames(){
    return this.http
    .get<any>('https://free-nba.p.rapidapi.com/games/?rapidapi-key=e71f3245f8msh7f301bd86bc7f78p11862cjsn9106b3b38be4'
    )
    .pipe(map((res:any)=>{return res;}),
    catchError((err)=>{return err})
    );
  }
  getdataplayers(){
    return this.http
    .get<any>('https://free-nba.p.rapidapi.com/players/?rapidapi-key=e71f3245f8msh7f301bd86bc7f78p11862cjsn9106b3b38be4'
    )
    .pipe(map((res:any)=>{return res;}),
    catchError((err)=>{return err})
    );
  }
  getAll():Observable<any[]>{
    console.log(`${environment.api}/users`)
    return this.http.get<any[]>(`${environment.api}/users`)
  }
  getAll2():Observable<any[]>{
    console.log(`${environment.api}/users`)
    return this.http.get<any[]>(`${environment.api}/users`)
  }
  /*   create(emplo:any[]){
    return this.http.post(`${environment.api}/employees`,emplo)
  } */
  Byid(id: number) {  
    return this.http.get<any[]>(`${environment.api}/employees?id=${id}`)
  }
  remove(id: number) {  
    return this.http.delete(`${environment.api}/employees/${id}`)
  }
  del(id: any) {  
    return this.http.delete(`${environment.api}/users/${id}`)
  }
  update(id:number,data:any){
    
    return this.http.put(`${environment.api}/employees/${id}`,data)
  }
}
