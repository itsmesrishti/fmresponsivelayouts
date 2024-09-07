const shareBtn = document.getElementById("share-btn");
const shareBlock = document.getElementById("share-block");
const authorInfo = document.getElementById("author-info");
const cardFooter = document.getElementById("card-footer");

shareBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  shareBlock.style.display = "flex";
  authorInfo.style.display = "none";
  cardFooter.classList.add("dark-bg");

  document.body.addEventListener("click", () => {
    shareBlock.style.display = "none";
    authorInfo.style.display = "flex";
    cardFooter.classList.remove("dark-bg");
  });
});
