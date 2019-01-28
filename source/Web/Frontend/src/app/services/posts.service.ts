import { HttpInterceptor } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { 
  }
  
  getUserPosts(userId: number): Observable<Post[]>{
    return this.http.get<Post[]>(`Posts/${userId}`);
  }
  
  

}


export interface Post{
  postname: string;
  date: Date;
  userId: number;
  interest: string;
}

