const current_URL = window.location.href;
if (current_URL.match(/v[0-9]{1,2}./)) {
  console.log(current_URL);
  const a = document.createElement("a");
  const button = document.createElement("button");
  button.innerText = "go to newest";
  a.href = current_URL.replace(/v[0-9]{1,2}./, "");
  a.appendChild(button);
  a.style = "position:absolute;top:0;left:0;z-index:999; ";
  document.body.appendChild(a);

  const targetNode = document.querySelector("aio-shell");
  const config = { attributes: true };
  const callback = (mutationList, observer) => {
    a.href = window.location.href.replace(/v[0-9]{1,2}./, "");
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
