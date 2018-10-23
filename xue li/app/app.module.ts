import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';//自己加
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';//创建组件自动有
//import { CommonService } from './services/common.service';
//import { Common2Service } from './services/common2.service';
import { RouterModule ,Routes} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './/app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
//import { APipePipe } from './apipe.pipe';
import { CoursexiangxiComponent } from './components/coursexiangxi/coursexiangxi.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent, 
    ChildComponent, 
    HeaderComponent,
    HomeComponent,
    TongbuComponent, 
    CourseComponent , 
    ShequComponent,
    TongbudetailComponent ,
    // APipePipe ,

    CoursexiangxiComponent ,
      ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, //自己加
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent
      },
      {path:'tongbu/:courseId',component:TongbuComponent},
      
      {path:'tongbudetail/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent}
    ]),
  ],
  providers: [
    //{provide:CommonService,useClass:CommonService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
