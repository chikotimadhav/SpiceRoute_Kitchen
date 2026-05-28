const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.spiceroutekitchen.com";

async function request(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);
  return res.json();
}

// ── Reservations ─────────────────────────────────────────────────────────────
export const reservationApi = {
  create: (data) =>
    request("/reservations", { method: "POST", body: JSON.stringify(data) }),
  getAll: () => request("/reservations"),
  cancel: (id) => request(`/reservations/${id}`, { method: "DELETE" }),
};

// ── Menu ─────────────────────────────────────────────────────────────────────
export const menuApi = {
  getAll:      ()           => request("/menu"),
  getCategory: (category)  => request(`/menu?category=${category}`),
  getItem:     (id)         => request(`/menu/${id}`),
};

// ── Reviews ──────────────────────────────────────────────────────────────────
export const reviewApi = {
  getAll:  ()     => request("/reviews"),
  create:  (data) => request("/reviews", { method: "POST", body: JSON.stringify(data) }),
};

// ── Contact ──────────────────────────────────────────────────────────────────
export const contactApi = {
  sendMessage: (data) =>
    request("/contact", { method: "POST", body: JSON.stringify(data) }),
};
