import axios from 'axios';
import { getConfig } from './config.js';

const BASE_URL = 'https://api.ebay.com/sell/logistics/v1';

function getHeaders() {
  const apiKey = getConfig('apiKey');
  if (!apiKey) {
    throw new Error('API key not configured');
  }
  return {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  };
}

async function request(endpoint, options = {}) {
  try {
    const response = await axios({
      url: `${BASE_URL}${endpoint}`,
      headers: getHeaders(),
      ...options
    });
    return response.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(`API Error: ${error.response.data.message}`);
    }
    throw new Error(`Request failed: ${error.message}`);
  }
}

export async function getStatus() {
  return await request('/status');
}
