// types/index.ts
export enum ChatTypeEnum {
  TEXT = "text",
  IMAGE = "image",
  DOCUMENT = "document",
  SYSTEM = "system",
}

export interface User {
  status: string;
  devices: string[];
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  about: string;
  image: string;
}

export interface Message {
  size: number | null;
  _id: string;
  chatId: string;
  userId: User;
  chatType: ChatTypeEnum;
  data: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Chat {
  _id: string;
  users: User[];
  chatMessages: Message[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  ticketId: {
    _id: string;
    number: string;
  };
  // ticketId: string;
}
