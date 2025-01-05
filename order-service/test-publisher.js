// test-publisher.js
const amqp = require('amqplib');

async function sendMessage() {
  const queue = 'order_created';
  const msg = { orderId: 1, productName: 'Test Product' };

  try {
    const connection = await amqp.connect(
      'amqp://user:password@localhost:5672',
    );
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
    console.log(`Sent: ${JSON.stringify(msg)}`);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

sendMessage();
