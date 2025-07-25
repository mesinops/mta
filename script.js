const url = "https://script.google.com/macros/s/AKfycbw3UtuX5aBRc5ez9y-TnwTJ6nc25JFDoJX3hsAYZZ04Bzf4K2kgUH9VpAZXmxFgRbp73g/exec"; // Ganti dengan URL Web App kamu

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("data-container");
    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <strong>${item.nama}</strong><br>
        Lokasi: ${item.lokasi}<br>
        Kondisi: ${item.kondisi}
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Gagal memuat data:", error);
    document.getElementById("data-container").textContent = "Gagal memuat data.";
  });
