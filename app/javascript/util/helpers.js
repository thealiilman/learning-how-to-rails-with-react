const csrfToken = document =>
  document.querySelector('[name="csrf-token"]').content;

export const passCsrfToken = (document, axios) =>
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken(document);
