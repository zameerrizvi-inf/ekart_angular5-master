import {
  Directive,
  Input,
  ElementRef,
  Renderer,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appInputFocus]',
})
export class InputFocusDirective implements OnChanges {
  @Input('appInputFocus') isFocused: boolean;

  constructor(private hostElement: ElementRef, private renderer: Renderer) {}

  ngOnChanges() {
    if (this.isFocused) {
      this.renderer.invokeElementMethod(
        this.hostElement.nativeElement,
        'focus',
      );
    }
  }
}
