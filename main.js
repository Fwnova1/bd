onload = () => {
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector(".flower");
  const messageBox = document.querySelector(".message-box");

  // Display message box after 5 seconds
setTimeout(() => {
    document.querySelector('.message-box').classList.add('show');
}, 10000); // Adjust the timing as needed
});
