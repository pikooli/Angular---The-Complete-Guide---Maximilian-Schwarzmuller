import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  private erroSub: Subscription;
  error = null;
  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
        console.log(posts);
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.erroSub = this.postsService.error.subscribe((erroMessage) => {
      this.error = erroMessage;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // this mean that the return will be a object that have a key of 'name' and the value of string
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
        console.log(posts);
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe((data) => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy() {
    this.erroSub.unsubscribe();
  }
}
