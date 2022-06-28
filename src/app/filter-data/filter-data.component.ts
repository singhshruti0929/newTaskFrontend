import { Component, OnInit } from '@angular/core';
import { PortalServicesService } from '../portal-services.service';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.scss'],
})
export class FilterDataComponent implements OnInit {
  subject: string = '';
  student: any[] = [];
  classes: any[] = [];
  class: string = '';
  teacher: any;
  classList: string[] = ['I', 'II', 'III', 'IV', 'V', 'IV'];
  subjectList: string[] = ['English', 'Science', 'Hindi', 'Maths', 'Drawing'];

  constructor(private portalServicesService: PortalServicesService) {}

  ngOnInit(): void {}

  search() {
    this.portalServicesService.getBySubject(this.subject).subscribe(
      (res: any) => {
        this.student = res.matched;
        res.matched.map((teacher: any) => {
          this.teacher = teacher.matchedSubject;
        });
      },
      (err: any) => console.log(err)
    );
  }

  searchClass() {
    console.log(this.class);
    this.portalServicesService.getByClass(this.class).subscribe(
      (res: any) => {
        console.log(res);
        this.classes = res.classes;
      },
      (err: any) => console.log(err)
    );
  }
}
