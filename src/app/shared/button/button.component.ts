import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', //this is called attribute selector , 
  //button having attribute appButton this component will be triggered
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
