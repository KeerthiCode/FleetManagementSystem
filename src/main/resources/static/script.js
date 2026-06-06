async function loadDrivers() {
    const response = await fetch('/drivers');
    const data = await response.json();

    document.getElementById('drivers').textContent =
        JSON.stringify(data, null, 2);
}

async function loadVehicles() {
    const response = await fetch('/vehicles');
    const data = await response.json();

    document.getElementById('vehicles').textContent =
        JSON.stringify(data, null, 2);
}

async function loadTasks() {
    const response = await fetch('/tasks');
    const data = await response.json();

    document.getElementById('tasks').textContent =
        JSON.stringify(data, null, 2);
}

window.onload = function () {
    loadDrivers();
    loadVehicles();
    loadTasks();
};