document.addEventListener("DOMContentLoaded", function () {
  var carouselElement = document.querySelector("#carouselExampleControls");

  if (carouselElement && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      wrap: true,
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

  bookmarkButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const plantId = button.dataset.id;
      const url = `/add-to-bookmarks/${plantId}`;

      try {
        const response = await fetch(url, { method: "POST" });
        const result = await response.json();

        console.log("Server response:", result);

        if (result.success) {
          alert(result.message);
        } else {
          alert(result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("An error occurred: " + error.message);
      }
    });
  });
});


const chatbotIcon = document.getElementById("chatbotIcon");
const chatbotBox = document.getElementById("chatbotBox");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const sendBtn = document.getElementById("sendBtn");

if (chatbotIcon && chatbotBox) {
  chatbotIcon.addEventListener("click", () => {
    chatbotBox.style.display =
      chatbotBox.style.display === "flex" ? "none" : "flex";
  });
}

if (sendBtn) {
  sendBtn.addEventListener("click", sendMessage);
}

if (chatInput) {
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  /* 👤 User message */
  chatMessages.innerHTML += `
  <div class="user-message">
    ${message}
  </div>
`;

  chatInput.value = "";

   /* Typing indicator add */
  const typingId = "typing-" + Date.now();

  chatMessages.innerHTML += `
    <div class="bot-message typing" id="${typingId}">
      <span><b>🌿 Bot:</b></span>
      <div class="typing-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  `;

  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {

    /*  API call */
    const response = await fetch("/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    /*  remove typing indicator */
    const typingElement = document.getElementById(typingId);

    if (typingElement) {
      typingElement.remove();
    }

    /*  Bot reply */
    chatMessages.innerHTML += `
      <div class="bot-message">
        <span><b>🌿 Bot:</b></span>
        <div class="bot-text">${marked.parse(data.reply)}</div>
      </div>
    `;

    chatMessages.scrollTop = chatMessages.scrollHeight;

  } catch (error) {

    const typingElement = document.getElementById(typingId);

    if (typingElement) {
      typingElement.remove();
    }

    chatMessages.innerHTML += `
      <div class="bot-message">
        <span><b>🌿 Bot:</b></span>
        <div class="bot-text">
          Server busy 😓 Try again later.
        </div>
      </div>
    `;
  }
}


let selectedAge = "";

function selectAge(age, element) {
  selectedAge = age;

  // cards reset
  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("active");
    const tick = c.querySelector(".tick");
    if (tick) tick.remove();
  });

  // selected card highlight
  element.classList.add("active");

  //  tick icon
  const tick = document.createElement("div");
  tick.className = "tick";
  tick.innerHTML = "✔";
  element.appendChild(tick);
}
async function getDiagnosis() {
  const problem = document.getElementById("problem").value;
  const ageGroup = selectedAge;

  if (!problem || !ageGroup) {
    alert("Please enter problem and select age group");
    return;
  }

  const res = await fetch("/diagnose", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ problem, ageGroup }),
  });

  const data = await res.json();

  let html = "<h2>🌿 Remedies:</h2>";

  if (!data.remedies || data.remedies.length === 0) {
    html += "<p>No remedies found 😓</p>";
  } else {
    data.remedies.forEach((r) => {
      html += `
        <div class="result-card">
          <h3>${r.plant}</h3>
          <p><b>Method:</b> ${r.method}</p>
          <p><b>Time:</b> ${r.time}</p>
          <p><b>Dosage:</b> ${r.dosage}</p>
          <p><b>Benefit:</b> ${r.benefit}</p>

          <h4>Steps:</h4>
          <ul>
            ${(r.steps || []).map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>
      `;
    });
  }

  document.getElementById("result").innerHTML = html;
}


document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");
  const btn = document.getElementById("diagnosisBtn");

  // CARD CLICK
  cards.forEach(card => {
    card.addEventListener("click", () => {

      selectedAge = card.dataset.age;

      // reset
      cards.forEach(c => {
        c.classList.remove("active");
        const tick = c.querySelector(".tick");
        if (tick) tick.remove();
      });

      // active
      card.classList.add("active");

      // tick
      const tick = document.createElement("div");
      tick.className = "tick";
      tick.innerHTML = "✔";
      card.appendChild(tick);
    });
  });

  // BUTTON CLICK
  if (btn) {
    btn.addEventListener("click", getDiagnosis);
  }

});