import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortalServicesService } from '../portal-services.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  chooseSubject: any[] = [];
  student: any[] = [];
  displayedColumns: string[] = [
    'name',
    'age',
    'rollNo',
    'gender',
    'class',
    'subject',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
    private portalServicesService: PortalServicesService,
    private router: Router
  ) {
    this.student = this.portalServicesService.student;
    this.dataSource = new MatTableDataSource(this.student);
    console.log(this.dataSource);
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
    this.subjectList.forEach((singleSubject: any) => {
      if (singleSubject.isSelected === true) {
        this.chooseSubject.push(singleSubject.value);
      }
    });
    return this.chooseSubject;
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
        this.chooseSubject.length = 0;
        this.chooseSubject = [];
        // this.dataSource = new MatTableDataSource(res);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  editStudent(id: any) {
    this.router.navigate(['/editStudent/' + id]);
  }

  deleteStudent(id: any) {
    this.portalServicesService.softDeleteStudent(id).subscribe(
      (res: any) => {
        console.log(res);
        this.portalServicesService.getStudents();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

