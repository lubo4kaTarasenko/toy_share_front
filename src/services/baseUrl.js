export function baseUrl() {
  //return 'http://localhost:3001';
  return process.env.NODE_ENV == 'development' ? 'http://localhost:3001' : 'http://localhost:3001';
}

export function fullPath(path) {
  return `${baseUrl()}${path}`
}