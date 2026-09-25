// =========================
// GIỎ HÀNG
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

    const product = {
        name: name,
        price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

    alert("Đã thêm sản phẩm vào giỏ hàng!");
}


function updateCart() {

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCart();


// =========================
// ĐẶT LỊCH
// =========================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const note = document.getElementById("note").value;


    const booking = {
        name: name,
        phone: phone,
        address: address,
        service: service,
        date: date,
        time: time,
        note: note
    };


    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];


    bookings.push(booking);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    alert(
        "Đặt lịch thành công!\n\n" +
        "Khách hàng: " + name + "\n" +
        "Dịch vụ: " + service + "\n" +
        "Ngày: " + date + "\n" +
        "Giờ: " + time
    );


    bookingForm.reset();

});