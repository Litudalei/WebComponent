window.addEventListener("DOMContentLoaded", () => {
    employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList")) || [];
    document.getElementById("emp-count").textContent = "(" + employeePayrollList.length + ")";
    createInnerHTML();
});

function createInnerHTML() {
    let innerHTML = "";

    for (let emp of employeePayrollList) {

        const date = new Date(emp._startDate);
        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        let deptHTML = "";
        emp._department.forEach(dept => {
            deptHTML += `<div class='dept-chip'>${dept}</div>`;
        });

        innerHTML += `
            <tr>
                <td><img class="table-profile" src="assets/${emp._profilePic}"></td>
                <td>${emp._name}</td>
                <td>${emp._gender}</td>
                <td>${deptHTML}</td>
                <td>${emp._salary}</td>
                <td>${formattedDate}</td>
                <td>
                    <button class="btn-small">Edit</button>
                    <button class="btn-small delete">Delete</button>
                </td>
            </tr>
        `;
    }

    document.querySelector("#table-display").innerHTML = innerHTML;
}