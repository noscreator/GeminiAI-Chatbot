// Import any required modules or libraries here
import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadMessages } from "./app.js";
import { saveMessages } from "./app.js";

// Define constants
const API_KEY = 'YOUR_API_KEY'; // Replace with your Gemini API key

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const chat = model.startChat({
  generationConfig: {
    maxOutputTokens: 2048,
  },
});

// Define variables for DOM elements
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Load saved messages when the page is loaded
let messages = loadMessages();
displayMessages(); // Add this line to display the loaded messages

// Function to display messages
async function displayMessages() {
  chatMessages.innerHTML = `<div class="layer-01">
          <div class="card">
          <h2>Welcome to GeminiAI Chatbot Starter</h2>
          <p>GeminiAI Chatbot Starter is an efficient template for developing chatbots using GeminiAI API.</p>
         </div></div>`;
  messages.forEach(message => {
    const messageDiv = document.createElement('div');
    const htmloutput = marked.parse(message.text);
    messageDiv.classList.add('message');
    messageDiv.classList.add(message.role);
    messageDiv.innerHTML = `<div class="fe2a9c">
          <img src="./assets/img/logo.png" />
          <h4>${message.role}</h4>
          </div>
          <div class="content">
            ${htmloutput}
          </div>`;
    chatMessages.appendChild(messageDiv);
  });
} // Add this line to close the function definition

// Event listener for sending a message
sendButton.addEventListener('click', async () => {
  const msg = userInput.value.trim();
  if (msg !== '') {
    try {
      messages.push({ role: 'User', text: msg });
      displayMessages();

      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const markdownText = response.text();
      messages.push({ role: 'NexosAi', text: markdownText });
      displayMessages();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again later.');
      // Provide fallback response
      const fallbackResponse = 'Sorry, an error occurred while processing your request. Please try again later.';
      // Display fallback response
      messages.push({ role: 'User', text: msg });
      messages.push({ role: 'NexosAi', text: fallbackResponse });
      displayMessages();
    }
    saveMessages(messages);
    userInput.value = ''; // 
  }
}); // Add this line to close the event listener