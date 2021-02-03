import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, tap } from "rxjs/operators";
import { Subject } from "rxjs";

var url =
  "https://ng-angular-http-d0028-default-rtdb.firebaseio.com/posts.json";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(url, postData, {
        observe: "body",
        responseType: "json",
      })
      .subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPost() {
    // this will return the result after the pipe, it allow to subscribe from the component
    return (
      this.http
        // this tell that the get method will return a object that have a key format string and value of Post
        .get<{ [key: string]: Post }>(url, {
          //  custom header
          headers: new HttpHeaders({ "custom-Header": "Hello" }),
          params: new HttpParams().set("print", "pretty").set("test", "test"),
        })
        .pipe(
          map((responseData: { [key: string]: Post }): Post[] => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key))
                postsArray.push({ ...responseData[key], id: key });
            }
            return postsArray;
          })
        )
    );
  }

  deletePosts() {
    return this.http
      .delete(url, {
        observe: "events",
      })
      .pipe(
        // tape is a pipe that don't change the value passed ,it like a readOnly
        tap((event) => {
          // this is a example if you want to hand event based on return type
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            //...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
