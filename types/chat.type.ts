export interface User {
    user_id: number;
    nama: string;
    avatar: string;
}

export interface Message {
    message_id: number;
    sender: number;
    content: string;
    timestamp: string;
}

export interface Conversation {
    conversation_id: number;
    user: User[];
    last_message: string;
    last_message_time: string;
    messages: Message[];
}

export interface ApiResponse {
    conversations: Conversation[];
}