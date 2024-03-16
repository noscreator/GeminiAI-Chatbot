import { GoogleGenerativeAI } from "@google/generative-ai";

// Define constants
const API_KEY = 'AIzaSyBqfxSfrBIgcYSQo6DN3xdc8Wel8HtIpHQ'; // Replace with your Gemini API key

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Function to start a chat session
function startChat() {
  return model.startChat({
    generationConfig: {
      maxOutputTokens: 100,
    },
  });
}

// Function to send a message to the chatbot
async function sendMessage(chat, message) {
  try {
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error sending message:', error);
    return 'An error occurred while sending your message. Please try again later.';
  }
}