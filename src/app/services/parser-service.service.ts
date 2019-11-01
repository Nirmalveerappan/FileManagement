import { Injectable } from '@angular/core';
import { CSVRecord } from '../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() {
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: string[], headerLength: number) {
    const dataArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      const data = (csvRecordsArray[i] as string).split(',');

      // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS
      // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA
      if (data.length === headerLength) {

        const csvRecord: CSVRecord = new CSVRecord();

        csvRecord.firstName = this.replaceString(data[0].trim());
        csvRecord.lastName = this.replaceString(data[1].trim());
        csvRecord.issueCount = this.replaceString(data[2].trim());
        csvRecord.dateOfBirth = this.replaceString(data[3].trim());

        dataArr.push(csvRecord);
      }
    }
    return dataArr;
  }

  replaceString(data: string) {
    return data.replace(/"/g, '');
  }

  // GET CSV FILE HEADER COLUMNS
  getHeaderArray(csvRecordsArr: string[]) {
    const headers = csvRecordsArr[0].toString().split(',');
    const headerArray = [];
    for (const header of headers) {
      headerArray.push(header);
    }
    return headerArray;
  }

  // CHECK IF FILE IS A VALID CSV FILE
  isCSVFile(file: File) {
    return file.name.endsWith('.csv');
  }
}
