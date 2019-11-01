import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResultsComponent } from './display-results.component';
import { FilterPipe } from '../../pipes/filter-pipe';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('DisplayResultsComponent', () => {
  let component: DisplayResultsComponent;
  let fixture: ComponentFixture<DisplayResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayResultsComponent, FilterPipe],
      imports: [FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayResultsComponent);
    component = fixture.componentInstance;
    component.csvRecords = csvRecords;
    component.fileName = 'issues.csv';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('issues.csv');
  });


});


const csvRecords = [{
  firstName: 'rec1',
  lastName: 'name',
  issueCount: '7',
  dateOfBirth: '08/12/1989'
}
];
