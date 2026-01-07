// home.js
let contactList = [];

function render() {
  contactList = JSON.parse(localStorage.getItem('AddressBookList')) || [];

  const wrap = document.getElementById('list-wrap');
  const empty = document.getElementById('empty-msg');
  const count = document.getElementById('contact-count');

  if (!wrap || !empty || !count) return;

  count.textContent = `${contactList.length} Contact${contactList.length !== 1 ? 's' : ''}`;

  if (contactList.length === 0) {
    wrap.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  let html = contactList.map(c => cardHTML(c)).join('');
  wrap.innerHTML = html;
}

function cardHTML(c) {
  const addr = c._address ? `${c._address}` : '';
  const cityState = (c._city || c._state) ? `${c._city || ''} ${c._state || ''}` : '';
  const phone = c._phone || '';
  const email = c._email || '';

  return `
    <div class="card" data-id="${c._id}">
      <img class="avatar" src="assets/${c._profilePic || 'pic1.jpg'}" alt="">
      <div class="info">
        <div class="name">${escapeHtml(c._name || '')}</div>
        <div class="meta">${escapeHtml(addr)} ${escapeHtml(cityState)}</div>
        <div class="meta">Phone: ${escapeHtml(phone)} • ${escapeHtml(email)}</div>
        <div class="actions" style="margin-top:8px">
          <button class="edit" onclick="onEdit('${c._id}')">Edit</button>
          <button class="del" onclick="onDelete('${c._id}')">Delete</button>
        </div>
      </div>
    </div>
  `;
}

function onDelete(id) {
  if (!confirm('Delete this contact?')) return;
  let list = JSON.parse(localStorage.getItem('AddressBookList')) || [];
  id = parseInt(id);
  const idx = list.findIndex(x => x._id === id);
  if (idx === -1) return;
  list.splice(idx, 1);
  localStorage.setItem('AddressBookList', JSON.stringify(list));
  render();
}

function onEdit(id) {
  let list = JSON.parse(localStorage.getItem('AddressBookList')) || [];
  id = parseInt(id);
  const item = list.find(x => x._id === id);
  if (!item) return;
  localStorage.setItem('editContact', JSON.stringify(item));
  window.location.href = 'add_contact.html';
}

// simple escaping to prevent minimal XSS when showing user data
function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

window.addEventListener('DOMContentLoaded', render);