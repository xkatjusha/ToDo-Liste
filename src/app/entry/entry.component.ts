import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  @ViewChild("newrecords", { static: false }) newrecords: ElementRef<HTMLInputElement>;
  @Input() todo1;
  records: string;

  constructor(public elementRef: ElementRef) {
  }

  add() {
    this.todo1.list.push(this.records);
    console.log(this.todo1.list);
    this.clear();
  }

  clear() {
    this.newrecords.nativeElement.value = "";
  }

}
