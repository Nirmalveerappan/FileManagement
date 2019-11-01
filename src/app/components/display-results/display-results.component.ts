import { Component, Input } from '@angular/core';
import { CSVRecord } from '../../models/record.model';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.scss']
})
export class DisplayResultsComponent {
  @Input() csvRecords: CSVRecord[];
  @Input() fileName: string;
  queryString: string;

  constructor() {
  }
}
