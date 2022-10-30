const amqp = require('amqplib');

const connect = async () => {
    try {
        const amqpServer = `amqp://localhost:5672`
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel()
        await channel.assertQueue("jobs")

        channel.consume('jobs', msg => {
            const input = JSON.parse(msg.content.toString())
            console.log(`Received job with input ${input.number}`)

            //"1" == 1 true
            //"1" === 1 false
            if(input.number == "harry") {
                channel.ack(msg);
            }
        })

        console.log(`Waiting for messages...`)

    } catch (err) {
        console.error(err)
        return
    }
}
connect()