// API abstraction layer - stubs for future backend integration
// Set USE_API=true in .env to switch from localStorage to API

const USE_API = false; // Toggle this or use environment variable

export function getUsers() {
  if (USE_API) {
    // return fetch('/api/users').then(res => res.json());
    return Promise.resolve([]);
  }
  return import('./storage.js').then(module => module.getUsers());
}

export function getProjects() {
  if (USE_API) {
    // return fetch('/api/projects').then(res => res.json());
    return Promise.resolve([]);
  }
  return import('./storage.js').then(module => module.getProjects());
}

export function getTasks() {
  if (USE_API) {
    // return fetch('/api/tasks').then(res => res.json());
    return Promise.resolve([]);
  }
  return import('./storage.js').then(module => module.getTasks());
}

export function getCurrentUser() {
  if (USE_API) {
    // return fetch('/api/auth/me').then(res => res.json());
    return Promise.resolve(null);
  }
  return import('./storage.js').then(module => module.getCurrentUser());
}

export function saveProjects(projects) {
  if (USE_API) {
    // return fetch('/api/projects', { method: 'PUT', body: JSON.stringify(projects) });
    return Promise.resolve();
  }
  return import('./storage.js').then(module => module.saveProjects(projects));
}

export function saveTasks(tasks) {
  if (USE_API) {
    // return fetch('/api/tasks', { method: 'PUT', body: JSON.stringify(tasks) });
    return Promise.resolve();
  }
  return import('./storage.js').then(module => module.saveTasks(tasks));
}

export function saveUsers(users) {
  if (USE_API) {
    // return fetch('/api/users', { method: 'PUT', body: JSON.stringify(users) });
    return Promise.resolve();
  }
  return import('./storage.js').then(module => module.saveUsers(users));
}

export function setCurrentUser(user) {
  if (USE_API) {
    // return fetch('/api/auth/me', { method: 'PUT', body: JSON.stringify(user) });
    return Promise.resolve();
  }
  return import('./storage.js').then(module => module.setCurrentUser(user));
}

export function seedDemoData() {
  if (USE_API) {
    // return fetch('/api/seed', { method: 'POST' });
    return Promise.resolve();
  }
  return import('./storage.js').then(module => module.seedDemoData());
}

export function exportJSON() {
  if (USE_API) {
    // return fetch('/api/export').then(res => res.blob());
    return Promise.resolve();
  }
  return import('./storage.js').then(module => module.exportJSON());
}

export function importJSON(file) {
  if (USE_API) {
    // return fetch('/api/import', { method: 'POST', body: file });
    return Promise.resolve();
  }
  return import('./storage.js').then(module => module.importJSON(file));
}
