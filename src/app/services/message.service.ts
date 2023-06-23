import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private msg_subject = new Subject<any>();

  sendMessage(message: string) {
    this.msg_subject.next({ text: message });
  }

  clearMessages() {
    this.msg_subject.next(null);
  }

  getMessage(): Observable<any> {
    return this.msg_subject.asObservable();
  }
}
