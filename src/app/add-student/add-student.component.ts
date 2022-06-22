import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortalServicesService } from '../portal-services.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  student: any[] = [];
  registerForm: FormGroup = this.fb.group({
    name: [''],
    gender: [''],
    age: [],
    class: [''],
    subject: [],
    rollNo: [],
  });

  subjectList: any[] = [
    { value: 'English', isSelected: false },
    { value: 'Maths', isSelected: false },
    { value: 'Hindi', isSelected: false },
    { value: 'Science', isSelected: false },
    { value: 'Drawing', isSelected: false },
  ];
  genderList: string[] = ['Trans', 'Male', 'Female'];

  constructor(
    private fb: FormBuilder,
    private portalServicesService: PortalServicesService
  ) {
    this.student = this.portalServicesService.student;
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
  get class(): any {
    return this.registerForm.get('class');
  }
  get subject(): any {
    return this.registerForm.get('subject');
  }
  get rollNo(): any {
    return this.registerForm.get('rollNo');
  }

  onChange(value: string) {
    this.subjectList.forEach((c: any) => {
      if (c.value === value) c.isSelected = !c.isSelected;
    });
  }
  getSubject() {
    const chooseSubject: any = [];
    this.subjectList.forEach((singleSubject: any) => {
      if (singleSubject.isSelected === true) {
        chooseSubject.push(singleSubject.value);
      }
    });
    return chooseSubject;
  }
  ngOnInit(): void {
    this.portalServicesService.getStudents();
  }
  ngDoCheck() {
    this.student = this.portalServicesService.student;
    console.log(this.student);
  }


  registerFormSubmit() {
    const selected = this.getSubject();
    this.registerForm.patchValue({
      subject: selected,
    });
    const formData = this.registerForm.value;
    this.portalServicesService.addStudent(formData).subscribe(
      (res: any) => {
        this.registerForm.reset();
        this.portalServicesService.getStudents();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
