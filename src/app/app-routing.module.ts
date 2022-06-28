import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

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
  {
   path: 'editStudent/:id',
    component: EditStudentComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
