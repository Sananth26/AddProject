import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocServiceService {
  
  private usersUrl: string;
  private REST_API_SERVER = "http://localhost:9097";

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(){
    return this.httpClient.get(this.REST_API_SERVER+"/users");
  }

}