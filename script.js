// JavaScript code
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn sự kiện submit mặc định

    // Lấy từ khóa tìm kiếm từ trường input
    var keyword = document.getElementById('search-input').value;

    // Chuyển hướng đến trang tìm kiếm Google với từ khóa tìm kiếm
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(keyword);
});