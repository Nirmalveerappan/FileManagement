import { Pipe, PipeTransform } from '@angular/core';
import { CSVRecord } from '../models/record.model';

@Pipe({name: 'filterPipe'})
export class FilterPipe implements PipeTransform {
  transform(records: CSVRecord[], searchText: string): CSVRecord[] {
    if (!searchText) {
      return records;
    }

    return records.filter((record) => {
      return record.issueCount.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
