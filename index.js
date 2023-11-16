const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const app = express();

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async message => {
  const content = message.body.toLowerCase();

  if (content === '!ping') {
    await message.reply('Pong! 🏓');
  } else if (content === '!hi') {
    await message.reply(
      "*Hey there! Welcome to Chatbot Automate System.* 😊\n\n" +
      "Here are a few commands you can try: 🔍\n" +
      "--------------------------------------\n" +
      "!help : View available commands ℹ️\n" +
      "!1 : Display details about Product One 1️⃣\n" +
      "!2 : Show details about Product Two 2️⃣\n" +
      "!3 : Present details about Product Three 3️⃣\n" +
      "!ok : Confirm or Acknowledge (I will respond with gratitude)"+
      "--------------------------------------\n"
    );
  } else if (content === '!help') {
    await message.reply(
      "*Here are the available commands:* ℹ️\n" +
      "--------------------------------------\n" +
      "!ping : Test if the bot is responsive 🏓\n" +
      "!hi : Display available commands 👋\n" +
      "!1 : Display details about Product One 1️⃣\n" +
      "!2 : Show details about Product Two 2️⃣\n" +
      "!3 : Present details about Product Three 3️⃣\n" +
      "!ok : Confirm or Acknowledge (I will respond with gratitude)"+
      "--------------------------------------\n"
    );
  } else if (content === '!1') {
    await message.reply(
      "*Details about Product One:* ℹ️\n" +
      "--------------------------------------\n" +
      "Description: Notebook A1 📓\n" +
      "Price: $55 💵\n" +
      "--------------------------------------\n"
    );
  } else if (content === '!2') {
    await message.reply(
      "*Details about Product Two:* ℹ️\n" +
      "--------------------------------------\n" +
      "Description: RealMe Curve Display 📱\n" +
      "Price: $50,000 💰\n" +
      "--------------------------------------\n"
    );
  } else if (content === '!3') {
    await message.reply(
      "*Details about Product Three:* ℹ️\n" +
      "--------------------------------------\n" +
      "Description: Poco M2 Pro 📱\n" +
      "Price: $1500 💵\n" +
      "Link: [Poco M2 Pro - Flipkart](https://www.flipkart.com/poco-m2-pro-green-greener-64-gb/p/itm795e36b373b6f) 🌐\n" +
      "--------------------------------------\n"
    );
  } else if (content.includes('!ok')) {
    await message.react('♥');
    await message.reply(
      "Thank You !! I'm Happy to Help 😇"
    );
  } else {
    console.log("Sorry, I didn't understand that command. Type !help for available commands.");
  }
});

client.initialize();

app.get('/', (req, res) => {
  return res.send(`API Running Successfully`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
