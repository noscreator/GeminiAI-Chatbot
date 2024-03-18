import { GoogleGenerativeAI } from "@google/generative-ai";

// Import any required modules or libraries here

const importMap = {
  imports: {
    "@google/generative-ai": "https://esm.run/@google/generative-ai"
  }
};


// Define constants
const API_KEY = 'AIzaSyBqfxSfrBIgcYSQo6DN3xdc8Wel8HtIpHQ'; // Replace with your Gemini API key

// Initialize Gemini AI

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const chat = model.startChat({
  generationConfig: {
    maxOutputTokens: 2024,
  },
});

// Export your functions or classes here

