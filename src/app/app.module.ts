import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthoritymanageComponent } from './home/authoritymanage/authoritymanage.component';
import { EducationPlanComponent } from './home/education-plan/education-plan.component';
import { ExaminationQuestionsManageComponent } from './home/examination-questions-manage/examination-questions-manage.component';
import { ExamManageComponent } from './home/exam-manage/exam-manage.component';
import { FreshmanRegisterComponent } from './home/freshman-register/freshman-register.component';
import { InformationManageComponent } from './home/information-manage/information-manage.component';
import { MyCurriculaVariableComponent } from './home/my-curricula-variable/my-curricula-variable.component';
import { MyCurriculumComponent } from './home/my-curriculum/my-curriculum.component';
import { OrganizationManageComponent } from './home/organization-manage/organization-manage.component';
import { SchoolDynamicsComponent } from './home/school-dynamics/school-dynamics.component';
import { ScoreManageComponent } from './home/score-manage/score-manage.component';
import { StudentExamComponent } from './home/student-exam/student-exam.component';
import { StudentIndividualInformationComponent } from './home/student-individual-information/student-individual-information.component';
import { StudentIndividualScoreComponent } from './home/student-individual-score/student-individual-score.component';
import { StudentOnlineEvaluationComponent } from './home/student-online-evaluation/student-online-evaluation.component';
import { StudentOnlineExamComponent } from './home/student-online-exam/student-online-exam.component';
import { TeacherTeachingComponent } from './home/teacher-teaching/teacher-teaching.component';
import { TeachingEvaluationManageComponent } from './home/teaching-evaluation-manage/teaching-evaluation-manage.component';
import { UserManageComponent } from './home/user-manage/user-manage.component';
import { Code404Component } from './code404/code404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthoritymanageComponent,
    EducationPlanComponent,
    ExaminationQuestionsManageComponent,
    ExamManageComponent,
    FreshmanRegisterComponent,
    InformationManageComponent,
    MyCurriculaVariableComponent,
    MyCurriculumComponent,
    OrganizationManageComponent,
    SchoolDynamicsComponent,
    ScoreManageComponent,
    StudentExamComponent,
    StudentIndividualInformationComponent,
    StudentIndividualScoreComponent,
    StudentOnlineEvaluationComponent,
    StudentOnlineExamComponent,
    TeacherTeachingComponent,
    TeachingEvaluationManageComponent,
    UserManageComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
