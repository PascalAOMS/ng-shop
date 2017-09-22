import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  @Output('selectPage') selectPage = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onPageSelect(page: string) {
    this.selectPage.emit(page)
  }

}
