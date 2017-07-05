import {Component, Input} from '@angular/core';
import {Message} from "../../models/messages/message";

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  text: string;

  @Input() chatMessage: Message;

  @Input() chatIndex: number;

  constructor() {
    console.log('Hello ChatMessageComponent Component');
    this.text = 'Hello World';
  }

}
