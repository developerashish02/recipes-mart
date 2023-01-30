import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() fetureSelectred = new EventEmitter<string>();
  // @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  onSelect(feture: string) {
    this.fetureSelectred.emit(feture);
  }
}
