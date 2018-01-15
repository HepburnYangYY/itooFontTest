import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from 'app/home/home.component';
import { Code404Component } from 'app/code404/code404.component';
import { AuthoritymanageComponent } from 'app/home/authoritymanage/authoritymanage.component';
import { EducationPlanComponent } from 'app/home/education-plan/education-plan.component';

import { ExamManageComponent } from 'app/home/exam-manage/exam-manage.component';
import { ExaminationQuestionsManageComponent } from 'app/home/examination-questions-manage/examination-questions-manage.component';
import { InformationManageComponent } from 'app/home/information-manage/information-manage.component';
import { OrganizationManageComponent } from 'app/home/organization-manage/organization-manage.component';
import { ScoreManageComponent } from 'app/home/score-manage/score-manage.component';
import { UserManageComponent } from 'app/home/user-manage/user-manage.component';

//路由配置
const routes: Routes = [
  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'home/:id',component:HomeComponent,children:[
   { path:'',component:AuthoritymanageComponent},
   {path:'education-plan',component:EducationPlanComponent},
   { path:'authoritymanage',component:AuthoritymanageComponent},  
   { path:'education-plan',component:EducationPlanComponent},
   { path:'exam-manage',component:ExamManageComponent},
   { path:'examination-questions-manage',component:ExaminationQuestionsManageComponent},
   { path:'information-manage',component:InformationManageComponent},
   { path:'organization-manage',component:OrganizationManageComponent},
   { path:'score-manage',component:ScoreManageComponent},
   { path:'user-manage',component:UserManageComponent},  
  ]},
 

  {path:'**',component:Code404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
