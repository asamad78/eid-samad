function displayGreeting() {
    const name = document.getElementById("name").value;
    const greeting = document.getElementById("greeting");
    greeting.innerHTML = ` ${name} I Wish you and your family a very happy Eid Mubarak`;
  }