import { Component, OnInit } from '@angular/core';
import { PortalServicesService } from '../portal-services.service';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.scss'],
})
export class FilterDataComponent implements OnInit {
  subject: string = '';
  classList: string[] = ['I', 'II', 'III', 'IV', 'V', 'IV'];
  subjectList: string[] = ['English', 'Science', 'Hindi', 'Maths'];

  constructor(private portalServicesService: PortalServicesService) {}

  ngOnInit(): void {}

  search() {
    this.portalServicesService.getBySubject(this.subject);
  }
}
