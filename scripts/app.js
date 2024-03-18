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

export { loadMessages, saveMessages };