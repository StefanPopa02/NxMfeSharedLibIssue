import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-todo-entry',
  template: `<div>remote works</div>`,
})
export class RemoteEntryComponent {
  constructor(private messageService: MessageService) {
    console.log("messageService", messageService);
  }
}
