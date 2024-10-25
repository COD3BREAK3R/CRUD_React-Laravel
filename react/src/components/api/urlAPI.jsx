export const urlAPI = () => {
  const isLocalhost = window.location.hostname === 'localhost';

  return isLocalhost
    ? 'http://localhost:8000/api'
    : 'https://mininventario.luisenrique.website/laravel/public/api'
}