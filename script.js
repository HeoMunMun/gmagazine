<!-- main script -->
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

<!-- Sap xep thep thu tu tu z den a -->
const myList = document.querySelector('#imageList');
    const listItems = Array.from(imageList.children);
  
    listItems.sort((a, b) => {
      if (a.textContent < b.textContent) {
        return 1;
      } else if (a.textContent > b.textContent) {
        return -1;
      } else {
        return 0;
      }
    });
  
    listItems.forEach((item) => {
      imageList.appendChild(item);
    });

<!-- dem luot truy cap -->
let count = 0;
        if (localStorage.getItem('page_views')) {
            count = parseInt(localStorage.getItem('page_views'));
        }

        count++;
        localStorage.setItem('page_views', count);
        document.getElementById('counter').textContent = count;
