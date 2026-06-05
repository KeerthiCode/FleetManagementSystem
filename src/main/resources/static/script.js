function loadDrivers() {
    fetch('/drivers')
        .then(res => res.json())
        .then(data => {
            let table = document.getElementById('driverTable');
            table.innerHTML =
                `<tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>License</th>
                 </tr>`;

            data.forEach(driver => {
                table.innerHTML += `
                <tr>
                    <td>${driver.id}</td>
                    <td>${driver.name}</td>
                    <td>${driver.phone}</td>
                    <td>${driver.licenseNumber}</td>
                </tr>`;
            });
        });
}

function loadVehicles() {
    fetch('/vehicles')
        .then(res => res.json())
        .then(data => {
            let table = document.getElementById('vehicleTable');
            table.innerHTML =
                `<tr>
                    <th>ID</th>
                    <th>Vehicle Number</th>
                    <th>Model</th>
                    <th>Status</th>
                 </tr>`;

            data.forEach(vehicle => {
                table.innerHTML += `
                <tr>
                    <td>${vehicle.id}</td>
                    <td>${vehicle.vehicleNumber}</td>
                    <td>${vehicle.model}</td>
                    <td>${vehicle.status}</td>
                </tr>`;
            });
        });
}

function loadTasks() {
    fetch('/tasks')
        .then(res => res.json())
        .then(data => {
            let table = document.getElementById('taskTable');
            table.innerHTML =
                `<tr>
                    <th>ID</th>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Status</th>
                 </tr>`;

            data.forEach(task => {
                table.innerHTML += `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.sourceLocation}</td>
                    <td>${task.destinationLocation}</td>
                    <td>${task.status}</td>
                </tr>`;
            });
        });
}