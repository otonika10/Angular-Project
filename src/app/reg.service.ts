
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegService {
  constructor(private http:HttpClient) { }
  getAll():Observable<any[]>{
    console.log(`${environment.api}/employees`)
    return this.http.get<any[]>(`${environment.api}/employees`)
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
