const amqp = require('amqplib');
const msg = { number: process.argv[2] }

const connect = async () => {
    try {
        const amqpServer = `amqp://localhost:5672`
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel()
        
        await channel.assertQueue('jobs')
        await channel.sendToQueue('jobs', Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number}`);

        await channel.close();
        await connection.close();

    } catch (err) {
        console.error(err)
        return
    }
}
connect()