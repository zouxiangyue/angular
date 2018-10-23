import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { ShareService } from '../../services/share.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[CommonService]
})
export class ParentComponent implements OnInit {
  constructor(private share:ShareService){

  };
  /* data;
  data1=['a','b','c'];
  add(){
    this.share.add(100);
  }
  del(i){
    this.data.splice(i,1)
    //this.local.set('list',this.data);
  }; */
  ngOnInit(){
    /* if(this.local.get('list')){
      this.data=this.local.get('list').split(',')
    }else{
        this.data=[1,2,3,4];
         */
    }
   /* if(localStorage.getItem('list')) {
     this.data=localStorage.getItem('list').split(',')
     console.log(localStorage.getItem('list'))
    }else{
      localStorage.setItem('list','1,2,3,4')
      this.data=localStorage.getItem('list').split(',')
    } */


    //this.local.set('name','zou')
    //setTimeout(()=>{this.data=this.data1},3000)
    /* setTimeout(()=>{
      this.data.push(2)
    },1000)  */
  }
//}
