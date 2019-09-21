import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit() {

  }

}
