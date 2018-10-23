import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {
courseId:number;
course;
flag:Boolean=false;
num;
date=new Date();
jsonObject="{1:1}"
  constructor(private http:HttpClient, private router: ActivatedRoute) { }
  change(evet){
    //console.log(event.target.value);
    //this.num=event.target.value;
  }
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId']
    //console.log(this.router.snapshot.params)
    this.http.get('/api/courses/'+this.courseId).subscribe(data=>{
      this.course=data[0];
      console.log(this.course,data,this.courseId);
    })
  }
//npm run start
}
