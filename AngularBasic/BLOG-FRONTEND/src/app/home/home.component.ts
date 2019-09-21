//this is a by default statement
import { Component, OnInit, OnDestroy, AfterViewInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SetterGetterService } from '../SharedFolder/Service/setter.getter.service';
import { HttpClient, HttpParams } from '@angular/common/http';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  ngOnDestroy(): void {
    console.log("trac4");
  }
  public title: string = "Vinay";
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private setterGetterService: SetterGetterService,
    private http: HttpClient) {
    console.log("track1");
  }

  ngOnInit() {
    console.log("track2");
    this.setterGetterService.setName("vinay");
  }
  ngAfterViewInit() {
    console.log("track3");
  }
  ngOnChanges() {
    console.log("obchange");
    console.log(this.title);
  }
  onClick() {
    this.router.navigateByUrl('blog');
    console.log(this.setterGetterService.getName())

  }
  createBlog() {
    //return new Observable();
    let jsonBody = {
      "title": "Jio Network",
      "description": "Vinay Kumar Ranjan",
      "category": "sdkjhgjhsjgkh",
      "blogBody": "jdshgjhj"
    }
    let authToken = "NmY1MzFiNTNhY2MzMzlhNDZiNWI1ZjZkMWJjOWQ3NDcwZjE0YmY1ZDMxMWI2YThmNjFlZDgwOGYxOWUwMDVjNDRkMjYwOGMwM2RjMjNkMmQwYTVhMzc5OGExNmJlYzgwY2NjMDQ5Mzk1YmY0OTlmZTQzNTcxMGM4Y2JkMzRlNzJlMA"
    this.http.post('https://blogapp.edwisor.com/api/v1/blogs/create', jsonBody, { params: { authToken: authToken } }).subscribe((data) => {
      console.log('object :', JSON.stringify(data));
    })
  }
  getRequest() {
    let para=new HttpParams().append('blogId','_-FssvNLw');
    let token = "NmY1MzFiNTNhY2MzMzlhNDZiNWI1ZjZkMWJjOWQ3NDcwZjE0YmY1ZDMxMWI2YThmNjFlZDgwOGYxOWUwMDVjNDRkMjYwOGMwM2RjMjNkMmQwYTVhMzc5OGExNmJlYzgwY2NjMDQ5Mzk1YmY0OTlmZTQzNTcxMGM4Y2JkMzRlNzJlMA=="
    this.http.get('https://blogapp.edwisor.com/api/v1/blogs/view/', { params: { authToken: token, blogId: "_-FssvNLw" } }).subscribe((data2) => {
      console.log('object2:', JSON.stringify(data2))
    })
  }

}
