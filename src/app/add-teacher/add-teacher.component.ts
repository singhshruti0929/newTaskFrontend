import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortalServicesService } from '../portal-services.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit {
  teacher: any[] = [];
  registerForm: FormGroup = this.fb.group({
    name: [''],
    gender: [''],
    age: [],
    subject: [],
  });
  genderList: string[] = ['Trans', 'Male', 'Female'];
  subjectList: string[] = ['English', 'Science', 'Hindi', 'Maths', 'Drawing'];

  constructor(
    private fb: FormBuilder,
    private portalServicesService: PortalServicesService
  ) {
    this.teacher = this.portalServicesService.teacher;
  }

  get name(): any {
    return this.registerForm.get('name');
  }
  get gender(): any {
    return this.registerForm.get('gender');
  }
  get age(): any {
    return this.registerForm.get('age');
  }
  get subject(): any {
    return this.registerForm.get('subject');
  }

  ngOnInit(): void {
    this.portalServicesService.getTeachers();
  }
  ngDoCheck() {
    this.teacher = this.portalServicesService.teacher;
  }

  registerFormSubmit() {
    const formData = this.registerForm.value;
    this.portalServicesService.addTeacher(formData).subscribe(
      (res: any) => {
        this.portalServicesService.getTeachers();
        this.registerForm.reset();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  softDeleteTeacher(id: any) {
    this.portalServicesService.softDeleteTeacher(id).subscribe(
      (res: any) => {
        console.log(res);
        this.portalServicesService.getTeachers();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
