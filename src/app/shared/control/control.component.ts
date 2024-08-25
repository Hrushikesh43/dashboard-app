import { Component, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host : {
    class : 'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent {
  constructor(private el:ElementRef){}
//@HostBinding('class') class = "control";

@Input({required: true}) label!:string;

// @HostListener('click')  onClick()
// {
//   console.log('Clicked..')
// }

onClick()
{
  console.log('Clicked..');
  console.log(this.el);
}
}
