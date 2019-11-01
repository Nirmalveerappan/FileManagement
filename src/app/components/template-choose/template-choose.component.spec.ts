import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { CSVRecord } from '../../models/record.model';
import { TemplateChooseComponent } from './template-choose.component';

const csvRecordsMock = [{
  firstName: 'rec1',
  lastName: 'name',
  issueCount: '7',
  dateOfBirth: '08/12/1989'
}
];

@Component({
  selector: 'app-display-results',
  template: `
      <div>results</div>`,
})
class DisplayResultsComponent {
  @Input() fileName = 'fileName';
  @Input() csvRecords: CSVRecord[] = csvRecordsMock;
}

describe('TemplateChooseComponent', () => {
  let component: TemplateChooseComponent;
  let fixture: ComponentFixture<TemplateChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateChooseComponent, DisplayResultsComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the display results if the record length greater than 0', () => {
    component.csvRecords = csvRecordsMock;
    fixture.detectChanges();
    console.log(component.csvRecords.length);
    const resultComponent: HTMLElement = fixture.nativeElement;
    const displayResults = resultComponent.querySelector('app-display-results');
    console.log(displayResults);
    expect(displayResults).toBeTruthy();
  });
});


