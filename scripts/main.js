const clearButton = document.getElementById('clear-button');
const chatMessages = document.getElementById('chat-messages');

window.onscroll = function () { scrollFunction() };

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