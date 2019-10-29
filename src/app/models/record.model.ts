export class CSVRecord {

  public firstName: string;
  public lastName: string;
  public issueCount: string;
  public dateOfBirth: string;

  constructor() {

  }
}

// Extending the Event with HTMLINPUTEVENT & event target to have more type check
export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export enum STATUS {
  'SUCCESS' = 'SUCESS',
  'FAILURE' = 'FAILURE',
  'DEFAULT' = 'DEFAULT'
}
