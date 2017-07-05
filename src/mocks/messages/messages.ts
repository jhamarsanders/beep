import {Profile} from '../../models/profile/profile';
import {Message} from '../../models/messages/message';

const userList: Profile[] = [
  {
    firstName: 'Jay',
    lastName: 'Sanders',
    email: 'j@j.com',
    avatar: 'https://cdn2.iconfinder.com/data/icons/ui-1/60/05-512.png',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Sam',
    lastName: 'Aleman',
    email: 's@s.com',
    avatar: 'https://cdn2.iconfinder.com/data/icons/ui-1/60/05-512.png',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Jeff',
    lastName: 'Jack',
    email: 'ja@ja.com',
    avatar: 'https://cdn2.iconfinder.com/data/icons/ui-1/60/05-512.png',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Laugh',
    lastName: 'Factory',
    email: 'l@l.com',
    avatar: 'https://cdn2.iconfinder.com/data/icons/ui-1/60/05-512.png',
    dateOfBirth: new Date()
  }
];

const MessageList: Message[] = [
  {
    user: userList[0],
    date: new Date(),
    lastMessage: 'Whats going on'
  },
  {
    user: userList[1],
    date: new Date(),
    lastMessage: 'Im on my way'
  },
  {
    user: userList[2],
    date: new Date(),
    lastMessage: 'No way thats awesome'
  },
  {
    user: userList[3],
    date: new Date(),
    lastMessage: 'Come check me out'
  }
];

export const MESSAGE_LIST = MessageList;
