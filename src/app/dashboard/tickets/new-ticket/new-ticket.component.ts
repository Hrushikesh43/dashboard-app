import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @Output() add = new EventEmitter<{ title: string, text: string }>();
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  ngOnInit() {
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(){
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }

onSubmit(title: string, ticketText: string, )
{
  this.add.emit({title: title, text: ticketText});
  this.form?.nativeElement.reset();
}
}
