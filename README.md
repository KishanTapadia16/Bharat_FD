# Multilingual FAQ System

1.BharatFD Backend Intern Assignment, it is a multilingual FAQ system built with Node.js, Express.js, MongoDB, and React.js.Check main branch for Readme file and master branch for all other code files.

2. Install dependencies:
   npm install

3. Set up environment variables:
   Create a \`.env\` file in the root directory and add the following:
   MONGODB_URI=mongodb_connection_string
   REDIS_URL=redis_connection_string


4. Start the server:
   npm start

## API Usage

- Create a new FAQ:

  POST /api/faqs
  Body: { "question": "Your question?", "answer": "Your answer." }
  
- Get all FAQs:
  GET /api/faqs
  Query params: lang (optional, e.g., ?lang=es for Spanish)


