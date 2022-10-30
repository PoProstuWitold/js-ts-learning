const { Kafka } = require('kafkajs')

const run = async() => {
    try {
        const kafka = new Kafka({
            clientId: 'my-app',
            brokers: ["localhost:9092"],
        })

        const admin = kafka.admin()
            console.log("Connecting.....")
        await admin.connect()
            console.log("Connected!")
        
        //A-M, N-Z
        await admin.createTopics({
            topics: [{
                topic: 'Users',
                numPartitions: 2
            }]
        })
            console.log("Created Successfully!")
        
        return await admin.disconnect()
    } catch (err) {
        console.error(`Something went wrong: ${err}`)
    } finally {
        return process.exit(0);
    }
}
run()