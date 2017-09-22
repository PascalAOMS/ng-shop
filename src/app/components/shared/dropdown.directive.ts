import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false

  constructor() {}

  @HostListener('click', ['$event']) toggleOpen(event) {
    event.stopPropagation()
    this.isOpen = !this.isOpen
  }


  ngOnInit() {
    document.body.addEventListener('click', () => {
      this.isOpen = false
    })
  }
}
