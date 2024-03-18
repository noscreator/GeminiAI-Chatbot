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
  // Clear the chat messages from the interface
  chatMessages.innerHTML = '';
  // Clear the chat messages from local storage
  localStorage.removeItem('chatMessages');
  // Optionally, notify the user that the chat history has been cleared
  alert('Chat history cleared successfully.');
});