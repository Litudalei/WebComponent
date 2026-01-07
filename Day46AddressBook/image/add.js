// add.js
let editing = false;
let editingItem = null;

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Indian phone pattern: country code optional like "91 9919819801" or "9919819801"
function validatePhone(phone) {
  const re = /^(?:\d{10}|(?:\d{2}\s)?\d{10})$/;
  return re.test(phone.replace(/[^0-9\s]/g, ''));
}

function setFormValues(obj) {
  if (!obj) return;
  document.getElementById('name').value = obj._name || '';
  document.querySelectorAll("input[name='profile']").forEach(r => r.checked = (r.value === obj._profilePic));
  document.getElementById('address').value = obj._address || '';
  document.getElementById('city').value = obj._city || '';
  document.getElementById('state').value = obj._state || '';
  document.getElementById('zip').value = obj._zip || '';
  document.getElementById('phone').value = obj._phone || '';
  document.getElementById('email').value = obj._email || '';
  document.getElementById('notes').value = obj._notes || '';
}

window.addEventListener('DOMContentLoaded', () => {
  // set up cancel
  document.getElementById('cancelBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Reset errors on reset
  document.getElementById('resetBtn').addEventListener('click', () => {
    ['nameError','phoneError','emailError','zipError'].forEach(id => document.getElementById(id).textContent = '');
  });

  // Prefill if editing
  const edit = localStorage.getItem('editContact');
  if (edit) {
    editing = true;
    editingItem = JSON.parse(edit);
    setFormValues(editingItem);
    // remove temporary edit storage (optional)
    // localStorage.removeItem('editContact');
  }

  // Form submit
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // read values
    const name = document.getElementById('name').value.trim();
    const profilePic = document.querySelector("input[name='profile']:checked")?.value || 'pic1.jpg';
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const notes = document.getElementById('notes').value.trim();

    // validations
    let ok = true;
    if (name.length < 3) {
      document.getElementById('nameError').textContent = 'Enter a valid name (min 3 chars)';
      ok = false;
    } else {
      document.getElementById('nameError').textContent = '';
    }

    if (phone && !validatePhone(phone)) {
      document.getElementById('phoneError').textContent = 'Enter a valid phone (10 digits or "91 XXXXXXXXXX")';
      ok = false;
    } else {
      document.getElementById('phoneError').textContent = '';
    }

    if (email && !validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Enter a valid email';
      ok = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }

    if (zip && !/^\d{4,6}$/.test(zip)) {
      document.getElementById('zipError').textContent = 'Enter a valid postal code';
      ok = false;
    } else {
      document.getElementById('zipError').textContent = '';
    }

    if (!ok) return;

    // build object (underscore props like payroll app)
    const obj = {
      _name: name,
      _profilePic: profilePic,
      _address: address,
      _city: city,
      _state: state,
      _zip: zip,
      _phone: phone,
      _email: email,
      _notes: notes
    };

    let list = JSON.parse(localStorage.getItem('AddressBookList')) || [];

    if (editing && editingItem) {
      // update existing record
      obj._id = editingItem._id;
      const idx = list.findIndex(x => x._id === obj._id);
      if (idx !== -1) list.splice(idx, 1, obj);
    } else {
      // create new
      obj._id = new Date().getTime();
      list.push(obj);
    }

    localStorage.setItem('AddressBookList', JSON.stringify(list));

    // cleanup and redirect home
    localStorage.removeItem('editContact');
    window.location.href = 'index.html';
  });
});