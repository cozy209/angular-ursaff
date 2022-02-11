import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accountelement} from "../model/accountelement.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllElements(){
    let specificURL = "/elements"
    return this.http.get<Accountelement[]>(this.baseURL+specificURL);
  }

  getElement(id:number){
    let specificURL = "/elements/"+id;
    return this.http.get<Accountelement[]>(this.baseURL+specificURL);
  }

  getElementsForPageAndElementNumber(pageNb:number, elementsNb:number){
    let specificURL = "/elements?_page="+pageNb+"&_limit="+elementsNb;
    return this.http.get<any>(this.baseURL+specificURL,{observe: 'response'});
  }

  getElementsForCriterias(criterias:Accountelement){
    let specificURL = "/elements?";

    if (criterias.contributorAccountNo != undefined){
      specificURL = specificURL+"contributorAccountNo="+criterias.contributorAccountNo+"&";
    }
    if (criterias.periodStart != undefined){
      specificURL = specificURL+"periodStart.year="+criterias.periodStart.year+"&periodStart.month="+criterias.periodStart.month+"&periodStart.day="+criterias.periodStart.day+"&";
    }
    if (criterias.periodEnd != undefined){
      specificURL = specificURL+"periodEnd.year="+criterias.periodEnd.year+"&periodEnd.month="+criterias.periodEnd.month+"&periodEnd.day="+criterias.periodEnd.day+"&";
    }
    if (criterias.accountType != undefined){
      specificURL = specificURL+"accountType="+criterias.accountType+"&";
    }
    if (criterias.activityType != undefined){
      specificURL = specificURL+"periodStart="+criterias.activityType+"&";
    } else {
      if (specificURL.endsWith("&")){
        specificURL.substring(0,specificURL.length-2);
      }
    }

    console.log(this.baseURL+specificURL);
    return this.http.get<Accountelement[]>(this.baseURL+specificURL);

  }

}
