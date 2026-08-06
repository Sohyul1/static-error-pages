// ---- Data (swap this out for real employee/project data, e.g. from an API) ----
const employee = {
  name: "Employee Name",
  position: "Position",
  since: "Certicode since 2026"
};

const projects = [
  {
    name: "Project Name",
    external: true,
    description: "Description",
    status: "Status",
    url: "#"
  },
  {
    name: "Project Name",
    external: true,
    description: "Description",
    status: "Status",
    url: "#"
  }
];

function renderEmployee() {
  document.getElementById('empName').textContent = employee.name;
  document.getElementById('empPosition').textContent = employee.position;
  document.getElementById('empSince').textContent = employee.since;
}

function renderProjects() {
  const grid = document.getElementById('cardGrid');
  document.getElementById('projectCount').textContent = `(${projects.length})`;

  grid.innerHTML = projects.map(p => `
    <div class="card">
      <div class="card-preview">
        <span class="preview-label">Preview</span>
      </div>
      <div class="card-body">
        <div class="card-top-row">
          <h3 class="card-title">${p.name}</h3>
          ${p.external ? '<span class="badge badge-navy">External</span>' : ''}
        </div>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer">
          <span class="badge badge-orange">${p.status}</span>
          <a class="view-link" href="${p.url}">View &rarr;</a>
        </div>
      </div>
    </div>
  `).join('');
}

function initBackButton() {
  document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'employee-directory.html';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderEmployee();
  renderProjects();
  initBackButton();
});