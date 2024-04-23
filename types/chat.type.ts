export interface User {
    id: number;
    name: string;
    avatar: string;
}

export interface Message {
    message_id: number;
    sender_id: number;
    content: string;
    date_created: string;
}

export interface Chat {
    chats_id: number;
    users: User[];
    messages: Message[];
}

export interface ApiResponseChat {
    data: Chat,
    status: number
}
