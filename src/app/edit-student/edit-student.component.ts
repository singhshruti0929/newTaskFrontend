import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortalServicesService } from '../portal-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  userId: string = '';
  editForm: FormGroup = this.fb.group({
    name: [''],
    gender: [''],
    age: [],
    class: [''],
    subject: [],
    rollNo: [],
    _id: [],
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
    public PortalServicesService: PortalServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  get name(): any {
    return this.editForm.get('name');
  }
  get gender(): any {
    return this.editForm.get('gender');
  }
  get email(): any {
    return this.editForm.get('age');
  }
  get number(): any {
    return this.editForm.get('class');
  }
  get employee(): any {
    return this.editForm.get('subject');
  }

  editFormSubmit() {
    const formData = this.editForm.value;
    this.PortalServicesService.editStudent(formData).subscribe(
      (res: any) => {
        console.log(res);
        this.PortalServicesService.getStudents();
        this.editForm.reset();
        this.router.navigate(['/student']);
      },
      (err: any) => console.log(err)
    );
  }

  onChange(value: string) {
    this.subjectList.forEach((c: any) => {
      if (c.value === value) c.isSelected = !c.isSelected;
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId != null) {
      this.PortalServicesService.getStudent(this.userId).subscribe(
        (res: any) => {
          console.log(res.sinleStudent);
          this.editForm.setValue({
            name: res.sinleStudent.name,
            rollNo: res.sinleStudent.rollNo,
            age: res.sinleStudent.age,
            class: res.sinleStudent.class,
            gender: res.sinleStudent.gender,
            subject: res.sinleStudent.subject[0],
            _id: res.sinleStudent._id,
          });
        }
      );
    }
  }
}
