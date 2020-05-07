import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ';
  paises:any[]=[];

  constructor(private httpClient:HttpClient){
console.log("Constructor de AppComponent");
this.httpClient.get('https://restcountries.eu/rest/v2/lang/es')
.subscribe(
  (resp:any)=>{console.log(resp), this.paises=resp},
(err)=>console.log(err)
    );
  }
}
