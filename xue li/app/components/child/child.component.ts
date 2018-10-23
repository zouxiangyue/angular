import { Component, OnInit ,Input,Output, EventEmitter,SimpleChanges, OnChanges} from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges{
 
   @Input() arr:Array<any>;
  @Output() delIndex=new EventEmitter<number>();
  del(i){
    this.delIndex.emit(i);
  } 

index=0;
log(msg){
  /* console.log(`这是${this.index++}次调用,调用的钩子函数是${msg}`); */
}
constructor(private share:ShareService) {
  /* this.log('constructor')
  console.log(this.arr) */
 }
ngOnChanges(changes:SimpleChanges):void{
  /* this.log('ngOnChanges')
  console.log(changes);
  for(var item in changes){
    //console.log(changes[item].currentValue)
    for(var i in changes[item]){
      console.log(`属性名:${i};属性值:${changes[item][i]}`)
    }
  } */
}
 //msg
// message:string;
arr3;
  ngOnInit() {// 在构造函数执行之后进行复杂的数据初始化
    this.arr3=this.share.data
   // this.message='hello' 初始化
    /* this.log('ngOnInit')
    console.log(this.arr) */
    //this.msg=ajax()
  }
  /* ngDoCheck():void{
    this.log('ngDoCheck')
  }
  ngAfterContentInit():void{
    
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked():void{
    this.log('ngAfterContentChecked')
  } */
  /* ngAfterViewInit():void{
   // this.message='hello' 在这里初始化报错
   setTimeout(()=>{ //用setTimeout初始化不会报错
    this.message='hello'
   },0)
    this.log('ngAfterViewInit')
  }
  ngAfterViewChecked():void{
    this.log('ngAfterViewChecked') 
  }  */
 
}
