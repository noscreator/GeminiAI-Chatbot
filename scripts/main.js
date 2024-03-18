const clearButton = document.getElementById('clear-button');


window.onscroll = function () { scrollFunction() };

const chatMessages = document.getElementById('chat-messages');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Event listener for clearing the chat history
clearButton.addEventListener('click', () => {
  chatMessages.innerHTML = '';
  localStorage.removeItem('chatMessages');
  alert('Chat history cleared successfully.');
});

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