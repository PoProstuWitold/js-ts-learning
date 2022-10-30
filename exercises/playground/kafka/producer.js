const { Kafka } = require('kafkajs')
const msg = process.argv[2]
const run = async() => {
    try {
        const kafka = new Kafka({
            clientId: 'my-app',
            brokers: ["localhost:9092"],
        })

        const producer = kafka.producer()
            console.log("Connecting.....")
        await producer.connect()
            console.log("Connected!")
        
        //A-M 0 , N-Z 1 
        const partition = msg[0] < "N" || msg[0] < 'n' ? 0 : 1;
        const result = await producer.send({
            topic: 'Users',
            messages: [
                {
                    value: msg,
                    partition: partition
                }
            ]
        })

        console.log(`Send Successfully! ${JSON.stringify(result)}`)
        await producer.disconnect()
    } catch (err) {
        console.error(`Something went wrong: ${err}`)
    } finally {
        return process.exit(0);
    }
}
run()