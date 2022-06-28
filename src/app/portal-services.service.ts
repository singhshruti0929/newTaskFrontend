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

  getStudent(id: string) {
    console.log(id);
    return this.http.get(`${this.serverUrl}/student/getStudent/${id}`);
  }

  editStudent(data: any) {
    console.log(data, '34');
    return this.http.post(
      `${this.serverUrl}/student/editStudent/${data._id}`,
      data
    );
  }

  // editTeacher(data: any) {
  //   return this.http.post(
  //     `${this.serverUrl}/teacher/editTeacher/${data.id}`,
  //     data
  //   );
  // }

  addTeacher(data: any) {
    return this.http.post(`${this.serverUrl}/teacher/addTeacher`, data);
  }

  softDeleteStudent(id: string) {
    const data = {
      isActive: false,
    };
    return this.http.post(`${this.serverUrl}/student/softDelete/${id}`, data);
  }
  softDeleteTeacher(id: string) {
    const data = {
      isActive: false,
    };
    return this.http.post(
      `${this.serverUrl}/teacher/softDeleteTeacher/${id}`,
      data
    );
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
    return this.http.get(`${this.serverUrl}/student/getBySubject/${subject}`);
  }

  getByClass(className: string) {
    const data = {
      class: className,
    };
    return this.http.post(`${this.serverUrl}/student/getByClass`, data);
  }
}
