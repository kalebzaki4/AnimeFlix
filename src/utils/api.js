import axios from "axios";

const MAX_RETRIES = 4;
const INITIAL_BACKOFF = 600; // ms
const MAX_CONCURRENT = 4;
const DEFAULT_TIMEOUT = 8000;
const cache = new Map();
let activeRequests = 0;
const queue = [];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWithConcurrency(fn) {
  if (activeRequests >= MAX_CONCURRENT) {
    await new Promise((resolve) => queue.push(resolve));
  }
  activeRequests++;
  try {
    return await fn();
  } finally {
    activeRequests--;
    if (queue.length > 0) queue.shift()();
  }
}

async function requestWithRetry(config, retries = MAX_RETRIES, backoff = INITIAL_BACKOFF) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await runWithConcurrency(() => axios(config));
    } catch (err) {
      lastError = err;
      // Retry em 429 ou 5xx
      if (
        (err.response && (err.response.status === 429 || (err.response.status >= 500 && err.response.status < 600))) ||
        err.code === "ECONNABORTED"
      ) {
        if (attempt < retries) await sleep(backoff * Math.pow(2, attempt));
      } else {
        break;
      }
    }
  }
  throw lastError;
}

function getCacheKey(config) {
  return `${config.method || "get"}::${config.url}::${JSON.stringify(config.params || {})}`;
}

export async function apiRequest(config, { useCache = false } = {}) {
  config.timeout = config.timeout || DEFAULT_TIMEOUT;
  if (useCache && config.method === "get") {
    const key = getCacheKey(config);
    if (cache.has(key)) return cache.get(key);
    const resp = await requestWithRetry(config);
    cache.set(key, resp);
    return resp;
  }
  return requestWithRetry(config);
}

// Métodos de atalho
export async function apiGet(url, params = {}, opts = {}) {
  return apiRequest({ url, method: "get", params }, opts);
}
export async function apiPost(url, data = {}, opts = {}) {
  return apiRequest({ url, method: "post", data }, opts);
}
export async function apiDelete(url, params = {}, opts = {}) {
  return apiRequest({ url, method: "delete", params }, opts);
}
export async function apiPut(url, data = {}, opts = {}) {
  return apiRequest({ url, method: "put", data }, opts);
}

// Cancelamento: basta passar signal: AbortController.signal no config

// Exemplo de uso:
// import { apiGet } from "../utils/api";
// const resp = await apiGet("https://api.jikan.moe/v4/anime", { q: "naruto" });
