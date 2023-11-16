const qrcode = require('qrcode-terminal')
const axios = require('axios')
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js')
// This is a self hosted version of the whatsapp web js library,
const client = new Client({
  authStrategy: new LocalAuth()
})

client.on('qr', qr => {
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  console.log('Client is ready!')
})

// client.on('message', async message => {
//   const content = message.body
//   if (content.includes('cat')) {
//     message.react('😹')
//     return message
//       .getChat()
//       .then(chat => chat.sendMessage('I love cat more than you do!'))
//   } else if (message.body.includes('kitty')) {
//     message.react('😍')
//     const media = await MessageMedia.fromUrl(
//       `https://unsplash.com/photos/gKXKBY-C-Dk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y2F0fGVufDB8fHx8MTcwMDA3MTY5NHww&force=true`
//     )
//     return message.getChat().then(chat => chat.sendMessage(media))
//   } else if (content.includes('meme')) {
//     message.react('😂')
//     const meme = await axios('https://meme-api.com/gimme').then(res => res.data)
//     client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
//   } else if (content.includes('joke')) {
//     const joke = await axios('https://v2.jokeapi.dev/joke/Any?safe-mode').then(
//       res => res.data
//     )
//     const jokeMsg = client.sendMessage(message.from, joke.setup || joke.joke)
//     if (joke.delivery) client.reply(joke.delivery)
//   } else {
//     console.log(`this command isn't exist`)
//   }
// })

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
    // Implement logic to display details about Product One
  } else if (content === '!2') {
    await message.reply(
      "*Details about Product Two:* ℹ️\n" +
      "--------------------------------------\n" +
      "Description: RealMe Curve Display 📱\n" +
      "Price: $50,000 💰\n" +
      "--------------------------------------\n"
    );
    // Implement logic to display details about Product Two
  } else if (content === '!3') {
    await message.reply(
      "*Details about Product Three:* ℹ️\n" +
      "--------------------------------------\n" +
      "Description: Poco M2 Pro 📱\n" +
      "Price: $1500 💵\n" +
      "Link: [Poco M2 Pro - Flipkart](https://www.flipkart.com/poco-m2-pro-green-greener-64-gb/p/itm795e36b373b6f) 🌐\n" +
      "--------------------------------------\n"
    );
    // Implement logic to display details about Product Three
  } else if (content.includes('!ok')) {
    await message.react('♥');
    await message.reply(
      "Thank You !! I'm Happy to Help 😇"
    );
  } else {
    console.log("Sorry, I didn't understand that command. Type !help for available commands.");
  }
});




//Thank You !! I'm Happy to Help 😇

client.initialize()
