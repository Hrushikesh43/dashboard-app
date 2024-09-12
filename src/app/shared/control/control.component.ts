import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  constructor(private el: ElementRef) {
    afterRender(()=> {
    console.log('After Render');
    })
    afterNextRender(()=>{
    console.log('After Next Render');
    })
   }
  //@HostBinding('class') class = "control";

  ngAfterContentInit() {
    console.log('NgAfterContentInit');
  }

  @Input({ required: true }) label!: string;

  // @HostListener('click')  onClick()
  // {
  //   console.log('Clicked..')
  // }

  onClick() {
    console.log('Clicked..');
    console.log(this.el);
    console.log(this.control);
  }
}
