import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import{FilterDataComponent} from './filter-data/filter-data.component';

const routes: Routes = [
  {
    path: 'student',
    component: AddStudentComponent,
  },
  {
    path: 'teacher',
    component: AddTeacherComponent,
  },
  {
    path: 'filter',
    component: FilterDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
