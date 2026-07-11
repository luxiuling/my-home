const filterButtons = document.querySelectorAll(".side-item");
const taskRows = document.querySelectorAll(".task-table .table-row[data-status]");
const syncButton = document.querySelector(".ghost-action");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    taskRows.forEach((row) => {
      row.hidden = filter !== "all" && row.dataset.status !== filter;
    });
  });
});

if (syncButton) {
  syncButton.addEventListener("click", () => {
    const originalText = syncButton.textContent;
    syncButton.textContent = "已同步";
    syncButton.disabled = true;

    window.setTimeout(() => {
      syncButton.textContent = originalText;
      syncButton.disabled = false;
    }, 1400);
  });
}
