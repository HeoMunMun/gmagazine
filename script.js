function searchList() {
  var input, filter, list, items, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.trim().toLowerCase();
  list = document.getElementById("imageList");
  items = list.getElementsByTagName("li");
  var noResults = true;

  for (i = 0; i < items.length; i++) {
    txtValue = items[i].querySelector(".image-description").textContent.toLowerCase();
    if (txtValue.indexOf(filter) > -1) {
      items[i].style.display = "block";
      noResults = false;
    } else {
      items[i].style.display = "none";
    }
  }

  var noResultMessage = document.getElementById("noResultMessage");
  if (noResults) {
    noResultMessage.style.display = "block";
  } else {
    noResultMessage.style.display = "none";
  }
}
// Ngăn chặn sự kiện khi nhấn các tổ hợp phím Ctrl + U, Ctrl + S, Ctrl + C
window.addEventListener("keydown", function (event) {
  if ((event.ctrlKey && event.key === "u") || 
      (event.ctrlKey && event.key === "s") || 
      (event.ctrlKey && event.key === "c")) {
    event.preventDefault();
  }
});
