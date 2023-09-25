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
// Ngăn chặn sự kiện khi nhấn các tổ hợp phím Ctrl + U, Ctrl + S, Ctrl + I, Ctrl + C
document.addEventListener("keydown", function(event) {
    // Kiểm tra xem người dùng có đang nhấn tổ hợp phím Ctrl + S hoặc Ctrl + U hoặc Ctrl + I không
    if ((event.ctrlKey || event.metaKey) && (event.key === "s" || event.key === "u" || event.key === "i" || event.key === "c")) {
        // Chuyển trang web đến link được chỉ định trước
        window.location.href = "https://heomunmun.github.io/gmagazine/"; // Thay đổi URL theo đúng link bạn muốn chuyển đến
        event.preventDefault(); // Ngăn ngừng xảy ra sau khi thực hiện hành động
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
