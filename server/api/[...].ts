import type { H3Event } from 'h3'
import { initSocket } from '../utils'

const router = createRouter()

router.get('/socket-chat', defineEventHandler((event: H3Event) => initSocket(event, 'chat'),))

router.get('/socket.io/map', defineEventHandler((event: H3Event) => initSocket(event, 'map'),))

export default useBase('/api', router.handler) 