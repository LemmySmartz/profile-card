  function updateDateTime() {
      const now = new Date();
      document.getElementById("datetime").textContent = now.toLocaleString();
    }
    document.addEventListener("DOMContentLoaded", () => {
      updateDateTime();
      setInterval(updateDateTime, 1000);
    });