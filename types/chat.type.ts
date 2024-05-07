export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface Message {
    message_id: string;
    sender_id: string;
    content: string;
    created_at: string;
}

export interface Chat {
    chats_id: string;
    users: User[];
    messages: Message[];
}

export interface ApiResponseChat {
    data: Chat,
    status: number
}
