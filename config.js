// In chat.html, within the <script> tag
const model = {
    apiKeys: [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,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,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], // Use API_KEY and BACKUP_API_KEYS from config.js
    apiUrl: 'https://openrouter.ai/api/v1', // Base URL as specified
    payload: (prompt) => ({
        model: 'deepseek/deepseek-r1:free', // Specific DeepSeek model
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
    }),
    responsePath: 'choices[0].text', // Adjust based on OpenRouter’s response format
    name: 'DeepSeek AI',
    maxRetries: 3, // Maximum retries per key
    timeout: 10000, // 10 seconds timeout per request
};
