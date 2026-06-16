// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

export const submitContact = async (payload) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    // Propagate error object for the component to catch
    throw data;
  }
  return data;
};
