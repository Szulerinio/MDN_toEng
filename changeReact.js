const current_URL = window.location.href;
const new_URL = window.location.href.replace(
  "pl.reactjs.org",
  "en.reactjs.org"
);

window.location.replace(new_URL);
