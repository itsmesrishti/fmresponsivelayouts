const shareBtn = document.getElementById("share-btn");
const shareBlock = document.getElementById("share-block");
const authorInfo = document.getElementById("author-info");

shareBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  shareBlock.style.display = "block";
  authorInfo.style.display = "none";

  document.body.addEventListener("click", () => {
    shareBlock.style.display = "none";
    authorInfo.style.display = "flex";
  });
});
