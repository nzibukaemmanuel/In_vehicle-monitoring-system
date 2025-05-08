const getPassengers = async () => {
  const response = await fetch("http://localhost:5000/user");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = ""; // Clear existing rows
  data.forEach((passenger) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${passenger.id}</td>
            <td>${passenger.email}</td>
            <td>${passenger.firstname}</td>
    `;
    tableBody.appendChild(row);
  });
    return data;
};

getPassengers()



  function downloadCSV() {
    fetch('http://localhost:5000/export-csv')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'passengers.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(err => console.error('Download error:', err));
  }
