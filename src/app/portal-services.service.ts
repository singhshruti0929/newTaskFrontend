import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PortalServicesService {
  student: any[] = [];
  teacher: any[] = [];
  matchedSubjects: any[] = [];
  serverUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addStudent(data: any) {
    return this.http.post(`${this.serverUrl}/student/addStudent`, data);
  }

  getStudents() {
    return this.http.get(`${this.serverUrl}/student/getStudents`).subscribe(
      (res: any) => {
        this.student = res.students;
      },
      (err: any) => console.log(err)
    );
  }

  addTeacher(data: any) {
    return this.http.post(`${this.serverUrl}/teacher/addTeacher`, data);
  }

  getTeachers() {
    return this.http.get(`${this.serverUrl}/teacher/getTeachers`).subscribe(
      (res: any) => {
        this.teacher = res.teachers;
      },
      (err: any) => console.log(err)
    );
  }

  getBySubject(subject: string) {
    console.log(subject);
    return this.http
      .post(`${this.serverUrl}/student/getBySubject`, subject)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.matchedSubjects = res.matched;
        },
        (err: any) => console.log(err)
      );
  }
}
