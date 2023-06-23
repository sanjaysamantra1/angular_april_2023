import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
})
export class SendMessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  sendMessage(msg: string) {
    this.messageService.sendMessage(msg);
  }
  clearMessage(){
    this.messageService.clearMessages();
  }
}
