import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[togglePassword]'
})
export class TogglePasswordDirective implements OnInit {

  @Input('border') border: string;
  private shown = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('border', this.border);
    const parent = this.el.nativeElement.parentNode;
    const input = this.el.nativeElement;
    const button = document.createElement('button');
    const image = document.createElement('img');

    const basicInputStyles = 'z-index: 2; flex-grow: 2; height: 44px; left: 19px; padding: 15px; border-right: none;';
    input.setAttribute('style', this.border && this.border == 'square' ? basicInputStyles + 'border-radius: 0px; border-top: 1px solid rgba(0, 0, 0, 0.25); border-bottom: 1px solid rgba(0, 0, 0, 0.25); border-left: 1px solid rgba(0, 0, 0, 0.25)' : basicInputStyles + 'border-top-left-radius: 5px; border-bottom-left-radius: 5px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;');
    parent.setAttribute('style', 'display: flex; flex-direction: row;');

    const basicButtonStyles = 'padding: 9px;';
    button.setAttribute('style', this.border && this.border == 'square' ? basicButtonStyles + 'box-sizing: border-box; border-top: 1px solid rgba(0, 0, 0, 0.25); border-bottom: 1px solid rgba(0, 0, 0, 0.25); border-right: 1px solid rgba(0, 0, 0, 0.25); border-left: none; background-color: #fff;' : basicButtonStyles + 'border-top: 1px solid #ced4da; border-bottom: 1px solid #ced4da; border-right: 1px solid #ced4da; border-left: none; background-color: #fff; border-top-right-radius: 5px; border-bottom-right-radius: 5px;');
    button.setAttribute('tabindex', '-1');
    image.setAttribute('src', '/assets/svg/eye.svg');

    button.appendChild(image);
    button.addEventListener('click', (event) => {
      event.stopPropagation();
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
