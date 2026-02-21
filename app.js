const users_container = document.querySelector(".users_container");
users_container.innerHTML = "درحال دریافت اطلاعات";

async function getUsers() {
  try {
    const response = await fetch("./Users/users.json");
    const data = await response.json();

    users_container.innerHTML = "";
    data.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("user");
      div.innerHTML = `
      <h3>یوزر ${item.id}</h3>
      <p><b>نام : </b>${item.name}</p>
      <p><b>ایمیل : </b>${item.email}</p>
      <p><b>تلفن : </b>${item.phone}</p>
      `;
      users_container.appendChild(div);
    });
  } catch (error) {
    users_container.innerHTML =
      '<div class="user">خطایی در دریافت اطلاعات رخ داد</div>';
  }
}

setTimeout(getUsers, 1500);
