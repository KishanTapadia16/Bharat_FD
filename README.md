# Multilingual FAQ System

This project is a multilingual FAQ system built with Node.js, Express.js, MongoDB, and React.js.

## Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/multilingual-faq.git
   cd multilingual-faq
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Set up environment variables:
   Create a \`.env\` file in the root directory and add the following:
   \`\`\`
   MONGODB_URI=your_mongodb_connection_string
   REDIS_URL=your_redis_connection_string
   \`\`\`

4. Start the server:
   \`\`\`
   npm start
   \`\`\`

## API Usage

- Create a new FAQ:
  \`\`\`
  POST /api/faqs
  Body: { "question": "Your question?", "answer": "Your answer." }
  \`\`\`

- Get all FAQs:
  \`\`\`
  GET /api/faqs
  Query params: lang (optional, e.g., ?lang=es for Spanish)
  \`\`\`

## Running Tests

Run the test suite with:

\`\`\`
npm test
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the eslint rules defined in the project.

## License

This project is licensed under the MIT License.

