class EmployeePayroll {

    constructor() {
        this._name = "";
        this._profilePic = "";
        this._gender = "";
        this._department = [];
        this._salary = "";
        this._notes = "";
        this._startDate = "";
    }

    get name() { return this._name; }
    set name(name) {
        let regex = /^[A-Z][a-zA-Z ]{2,}$/;
        if (!regex.test(name)) throw "Invalid Name!";
        this._name = name;
    }

    get profilePic() { return this._profilePic; }
    set profilePic(pic) { this._profilePic = pic; }

    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }

    get department() { return this._department; }
    set department(deptList) { this._department = deptList; }

    get salary() { return this._salary; }
    set salary(sal) { this._salary = sal; }

    get notes() { return this._notes; }
    set notes(notes) { this._notes = notes; }

    get startDate() { return this._startDate; }
    set startDate(date) {

        const today = new Date();
        const diff = (today - date) / (1000 * 60 * 60 * 24);

        if (diff < 0) throw "Future date not allowed!";
        if (diff > 30) throw "Start date must be within 30 days!";

        this._startDate = date;
    }

    
}


window.addEventListener("DOMContentLoaded", () => {

    // Salary Output
    const salarySlider = document.getElementById("salary");
    const salaryOutput = document.getElementById("salary-output");
    salarySlider.addEventListener("input", () => {
        salaryOutput.textContent = salarySlider.value;
    });

    // Name Validation
    const nameField = document.getElementById("name");
    nameField.addEventListener("input", function () {
        let regex = /^[A-Z][a-zA-Z ]{2,}$/;
        if (!regex.test(this.value))
            nameError.innerText = "Name must start with capital and min 3 chars!";
        else
            nameError.innerText = "";
    });

    // Date Validation
    document.getElementById("day").addEventListener("change", validateStartDate);
    document.getElementById("month").addEventListener("change", validateStartDate);
    document.getElementById("year").addEventListener("change", validateStartDate);
});

function createEmployeeObject() {

    let emp = new EmployeePayroll();

    emp.name = document.getElementById("name").value;
    emp.profilePic = document.querySelector("input[name='profile']:checked")?.value || "";
    emp.gender = document.querySelector("input[name='gender']:checked")?.value || "";

    let deptValues = [];
    document.querySelectorAll("input[type='checkbox']:checked")
        .forEach(cb => deptValues.push(cb.value));
    emp.department = deptValues;

    emp.salary = document.getElementById("salary").value;
    emp.notes = document.getElementById("notes").value;

    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    emp.startDate = new Date(year, month, day);

    return emp;
}

function validateStartDate() {
            console.log("validateStartDate function executing");

            const day = parseInt(document.getElementById("day").value);
            const month = parseInt(document.getElementById("month").value); // must be 0–11
            const year = parseInt(document.getElementById("year").value);

            const selected = new Date(year, month, day);
            const today = new Date();

            // Normalize both to MIDNIGHT
            const selectedMid = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate());
            const todayMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());

            const diffMs = todayMid - selectedMid;
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            console.log("Diff:", diffDays);

            // 1️⃣ future date check FIRST
            if (diffDays < 0) {
                document.getElementById("dateError").innerText =
                    "Start date cannot be in the future!";
                return false;
            }

            // 2️⃣ older than 30 days check
            if (diffDays > 30) {
                document.getElementById("dateError").innerText =
                    "Start date must be within 30 days!";
                return false;
            }

            // 3️⃣ valid
            document.getElementById("dateError").innerText = "";
            return true;
        }

function saveToLocalStorage(empObj) {

    let list = JSON.parse(localStorage.getItem("EmployeePayrollList")) || [];

    list.push(empObj);

    localStorage.setItem("EmployeePayrollList", JSON.stringify(list));
}

document.getElementById("resetBtn").addEventListener("click", () => {
    nameError.innerText = "";
    dateError.innerText = "";
});


document.getElementById("payrollForm").addEventListener("submit", e => {
    e.preventDefault();

    if (!validateStartDate()) return;

    try {
        const emp = createEmployeeObject();
        saveToLocalStorage(emp);
        alert("Employee Added!");
    } catch (err) {
        alert(err);
    }
});