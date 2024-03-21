
export const CHAT_DATA = {
    "conversations": [
        {
            "conversation_id": 1,
            "user": [
                {
                    "user_id": 101,
                    "nama": "John",
                    "avatar": "/assets/dummy-profile.png"
                },
                {
                    "user_id": 201,
                    "nama": "Mitra 1",
                    "avatar": "/assets/dummy-profile.png"
                }
            ],
            "last_message": "Hello, how are you?",
            "last_message_time": "2024-03-20T12:31:00Z",
            "unread_messages_count": 2,
            "messages": [
                {
                    "message_id": 1,
                    "sender": 101,
                    "content": "Hi there!",
                    "timestamp": "2024-03-20T12:30:00Z",
                    "unread": false
                },
                {
                    "message_id": 2,
                    "sender": 201,
                    "content": "Hello, how are you?",
                    "timestamp": "2024-03-20T12:31:00Z",
                    "unread": true
                }
            ]
        },
        {
            "conversation_id": 2,
            "user": [
                {
                    "user_id": 101,
                    "nama": "John 2",
                    "avatar": "/assets/dummy-profile.png"
                }, {
                    "user_id": 202,
                    "nama": "Mitra 2",
                    "avatar": "/assets/dummy-profile.png"
                },
            ],

            "last_message": "How's the project going?",
            "last_message_time": "2024-03-20T13:15:00Z",
            "unread_messages_count": 2,
            "messages": [
                {
                    "message_id": 3,
                    "sender": 101,
                    "content": "I'm doing well, thanks!",
                    "timestamp": "2024-03-20T13:10:00Z",
                    "unread": false
                },
                {
                    "message_id": 4,
                    "sender": 202,
                    "content": "The project is going smoothly.",
                    "timestamp": "2024-03-20T13:15:00Z",
                    "unread": true
                }
            ]
        }
    ]
}
