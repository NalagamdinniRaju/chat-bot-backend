// controllers/messageController.js
const Message = require('../models/Message');

const welcomeMessage = {
    text: `Hi, welcome to Aravind's chatbot! Choose a query:
1. Option a
2. Option b
3. Option c
4. Option d
5. Raise your own query`,
};

const getMessageResponse = async (req, res) => {
    const { text } = req.body;

    switch (text.toLowerCase()) {
        case 'hi':
            return res.json(welcomeMessage);
        case '1':
            return res.json({ text: "You selected Option a" });
        case '2':
            return res.json({ text: "You selected Option b" });
        case '3':
            return res.json({ text: "You selected Option c" });
        case '4':
            return res.json({ text: "You selected Option d" });
        case '5':
        case 'raise your own query':
            return res.json({ text: "Please enter your query below:" });
        default:
            const newMessage = new Message({ text });
            await newMessage.save();
            return res.json({ text: `Thank you! Your query has been submitted. Your ticket number is #${newMessage._id}` });
    }
};

module.exports = {
    getMessageResponse,
};
