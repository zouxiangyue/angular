import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  txt:string;
  arr:Msg[]=[];
  counter:number=0;
  getValue(e){
   if(e.keyCode==13){
     this.arr.push(new Msg(this.txt,false));
     this.txt='';
     this.count();
    }
  };
  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    })
  }
  delete(idx){
    this.arr.splice(idx,1);
    this.count();
  }
  change(idx){
    this.arr[idx].done=!this.arr[idx].done;
    this.count();
  }
}
//声明类
class Msg{ //使上文的done不会报错
  constructor(public title:string,public done:boolean){

  }

}
