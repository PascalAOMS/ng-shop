import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent'
  @Input('appHighlight') highlightColor = 'gray'

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor

   constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // If changing one simple property is all you need, renderer is not necessary
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'rgba(0,0,0,.3)')
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'rgba(0,0,0,.9)')
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'rgba(0,0,0,.1)')
    this.backgroundColor = this.defaultColor
  }

}
