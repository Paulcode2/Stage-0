function updateTime() {
    const now = new Date();
    document.getElementById("utc-time").textContent = now.toUTCString();
  }

  setInterval(updateTime, 1000);
  updateTime();