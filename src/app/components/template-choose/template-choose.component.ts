import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ParserService } from '../../services/parser-service.service';
import { CSVRecord, HTMLInputEvent, STATUS } from '../../models/record.model';

@Component({
  selector: 'app-template-choose',
  templateUrl: './template-choose.component.html',
  styleUrls: ['./template-choose.component.scss']
})
export class TemplateChooseComponent implements OnInit {
  public csvRecords: CSVRecord[] = [];
  public successMsg: string;
  public errorMsg: string;
  public fileName: string;

  constructor(private parserService: ParserService) {

  }

  @ViewChild('fileImportInput', {static: false}) fileImportInput: ElementRef;

  fileChangeListener(event: HTMLInputEvent): void {
    const inputFile = event.target.files[0];
    this.fileName = inputFile.name;
    if (this.parserService.isCSVFile(inputFile)) {
      const reader = new FileReader();
      reader.readAsText(inputFile);
      reader.onload = () => {
        this.showMessages(STATUS.SUCCESS, 'File Upload Successful');
        const csvData = reader.result;
        const csvRecordsArray = (csvData as string).split(/\r\n|\n/);
        const headersRow = this.parserService.getHeaderArray(csvRecordsArray);
        this.csvRecords = this.parserService.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      reader.onerror = () => {
        this.showMessages(STATUS.FAILURE, 'Unable to read ' + inputFile);
      };

    } else {
      this.fileReset();
      this.showMessages(STATUS.FAILURE, 'Please import a valid CSV file');

    }
  }

  showMessages(status: STATUS, message: string) {
    this.successMsg = '';
    this.errorMsg = '';
    if (status === STATUS.SUCCESS) {
      this.successMsg = message;
    } else if (status === STATUS.FAILURE) {
      this.errorMsg = message;
    }
  }

  ngOnInit(): void {
  }


  fileReset() {
    this.fileImportInput.nativeElement.value = '';
    this.csvRecords = [];
    this.fileName = '';
    this.showMessages(STATUS.DEFAULT, '');
  }
}
