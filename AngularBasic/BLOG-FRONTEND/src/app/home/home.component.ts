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
    let authToken = "MjliMDJlMGU4MGM5Mzc2ODBmODE1MDA4MWEyYjJkZWM1NTA4MThkNzA2ZDliM2M4Yjc3OTlhYWZkOWNlMGQ2OTQ2ZjFmOGE4Y2Y0ZDY4MzhkMDMwZTc0OGNmYTBmMmFhZGQ4NDZhN2NlMTRjNmQ1ZjI3ZTU3YTliZTNkOTk5ODY1YQ=="
    this.http.post('https://blogapp.edwisor.com/api/v1/blogs/create', jsonBody, { params: { authToken: authToken } }).subscribe((data) => {
      console.log('object :', JSON.stringify(data));
    })
  }
  getRequest() {
    let token = "MjliMDJlMGU4MGM5Mzc2ODBmODE1MDA4MWEyYjJkZWM1NTA4MThkNzA2ZDliM2M4Yjc3OTlhYWZkOWNlMGQ2OTQ2ZjFmOGE4Y2Y0ZDY4MzhkMDMwZTc0OGNmYTBmMmFhZGQ4NDZhN2NlMTRjNmQ1ZjI3ZTU3YTliZTNkOTk5ODY1YQ=="
    this.http.get('https://blogapp.edwisor.com/api/v1/blogs/view/5qKYFmYYP"', { params: { authToken: token } }).subscribe((data2) => {
      console.log('object2:', JSON.stringify(data2))
    })
  }

}
