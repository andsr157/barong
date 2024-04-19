import { Server, Socket, type ServerOptions } from 'socket.io';
import type { H3Event } from 'h3'
import moment from 'moment'
const options: Partial<ServerOptions> = {
    path: `/api/socket-chat`,
    serveClient: false
}

const io = new Server(options);

export function initSocket(event: H3Event, nameSpace: string) {

    // @ts-ignore
    io.attach(event.node.res.socket?.server);


    const nameSpaceHandler: { [key: string]: (socket: Socket) => void } = {
        chat: (socket: Socket) => {
            socket.on('testChat', (payload: any) => {
                console.log('web socket connected', payload)
                io.of('/chat').to("some room").emit('message', payload)
            })
        },

        // map: (socket: Socket) => {
        //     socket.on('testChat', (payload: any) => {
        //         socket.emit('message', () => {
        //             return 'ini pesan map'
        //         })
        //     })
        // }
    }

    io.of(`/${nameSpace}`).on('connection', (socket: Socket) => {
        socket.join("some room");
        nameSpaceHandler[nameSpace](socket)
    })
}
