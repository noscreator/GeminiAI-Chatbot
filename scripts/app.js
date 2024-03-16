// Define variables for DOM elements
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const clearButton = document.getElementById('clear-button');
const chatMessages = document.getElementById('chat-messages');

// Define function to save messages to local storage
function saveMessages(messages) {
  try {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving messages to local storage:', error);
    // Handle the error gracefully, such as displaying a user-friendly error message
    alert('An error occurred while saving messages. Please try again later.');
  }
}

// Define function to load messages from local storage
function loadMessages() {
  try {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  } catch (error) {
    console.error('Error loading messages from local storage:', error);
    // Handle the error gracefully, such as returning an empty array
    return [];
  }
}

// Load saved messages when the page is loaded
let messages = loadMessages();
displayMessages(); // Add this line to display the loaded messages

// Function to display messages
function displayMessages() {
  chatMessages.innerHTML = '';
  messages.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(message.role);
    messageDiv.innerText = message.text;
    chatMessages.appendChild(messageDiv);
  });
}

// Event listener for sending a message
sendButton.addEventListener('click', async () => {
  const msg = userInput.value.trim();
  if (msg !== '') {
    messages.push({ role: 'user', text: msg });
    displayMessages();
    try {
      // Your code for sending the user message to the chatbot and receiving a response
      const response = await chatbot.sendMessage(msg);
      messages.push({ role: 'chatbot', text: response });
      displayMessages();
      saveMessages(messages); // Save messages after each successful interaction

    } catch (error) {

      console.error('Error sending message:', error);
      // Handle the error gracefully, such as displaying a user-friendly error message
      alert('An error occurred while sending your message. Please try again later.');
    }
  }
  userInput.value = ''; // Clear input field after sending message
});


// Event listener for clearing the chat history
clearButton.addEventListener('click', () => {
  // Clear the chat messages from the interface
  chatMessages.innerHTML = '';
  // Clear the chat messages from local storage
  localStorage.removeItem('chatMessages');
  // Optionally, notify the user that the chat history has been cleared
  alert('Chat history cleared successfully.');
});