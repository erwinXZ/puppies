import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[togglePassword]'
})
export class TogglePasswordDirective {

  private shown = false;

  constructor(private el: ElementRef) {
    const parent = this.el.nativeElement.parentNode;
    const input = this.el.nativeElement;
    const button = document.createElement('button');
    const image = document.createElement('img');

    input.setAttribute('style', 'z-index: 2; flex-grow: 2; border-top-left-radius: 5px; border-bottom-left-radius: 5px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;border-right: none; height: 44px; left: 19px; padding: 15px;');
    parent.setAttribute('style', 'display: flex; flex-direction: row; border: none;');
    button.setAttribute('style', 'border-top: 1px solid #ced4da; border-bottom: 1px solid #ced4da; border-right: 1px solid #ced4da; border-left: none; background-color: #fff; border-top-right-radius: 5px; border-bottom-right-radius: 5px;');
    image.setAttribute('src', '/assets/svg/eye.svg');

    button.appendChild(image);
    button.addEventListener('click', () => {
      this.toggle();
    });

    parent.appendChild(button);
  }

  toggle() {
    this.shown = !this.shown;
    if (this.shown) {
      this.el.nativeElement.setAttribute('type', 'text');
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
    }
  }
}
