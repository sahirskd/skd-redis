import { Client } from 'redis-om'
import { createClient } from 'redis'

const hostUrl = process.env.HOST_URL
const dbPort = process.env.PORT_NO
const dbPassword = process.env.DB_PASSWORD

export const connection = createClient({
    socket: {
        host: hostUrl,
        port: dbPort
    },
    password: dbPassword
})
await connection.connect()

const client = await new Client().use(connection)

export default client
