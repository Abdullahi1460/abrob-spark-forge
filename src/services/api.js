// src/services/api.js
// Base URL for the frontend (provided by Vite env)
const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

// Optional explicit contact endpoint; defaults to `${API_URL}/contact`
let CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT?.replace(/\/+$/, "") ||
  `${API_URL}/contact`;

/**
 * Allows runtime override of the contact endpoint (useful for tests).
 * @param {string} url - New endpoint URL.
 */
export const setContactEndpoint = (url) => {
  if (url) {
    CONTACT_ENDPOINT = url.replace(/\/+$/, "");
  }
};

/**
 * Submit a contact form payload.
 * @param {Object} payload - Form data.
 * @returns {Promise<Object>} The parsed JSON response.
 * @throws Will throw a standardized error object if the request fails.
 */
export const submitContact = async (payload) => {
  const response = await fetch(`${CONTACT_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    // Throw a standardized error object.
    const error = {
      status: response.status,
      message: data?.message || "Failed to submit contact",
      details: data,
    };
    throw error;
  }
  return data;
};
