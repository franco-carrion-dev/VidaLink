// ==========================================================================
// ARCHIVO: main.js
// Autor: Piero Rodríguez Deza
// Propósito: Control del menú hamburguesa responsive y envío de formularios.
// ==========================================================================

const hamburgerBtn = document.getElementById('hamburgerBtn');
const horizontalMenu = document.getElementById('horizontalMenu');

if (hamburgerBtn && horizontalMenu) {
  hamburgerBtn.addEventListener('click', () => {
    horizontalMenu.classList.toggle('active');
  });
}

const mainDonorForm = document.getElementById('mainDonorForm');
if (mainDonorForm) {
  mainDonorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    const blood = document.getElementById('bloodSelect').value;
    const msg = document.getElementById('formMessage');
    msg.textContent = `✔ ¡Gracias, ${name}! Tu registro con grupo ${blood} fue guardado correctamente.`;
    mainDonorForm.reset();
  });
}

const registerPageForm = document.getElementById('registerPageForm');
if (registerPageForm) {
  registerPageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✔ Cuenta creada exitosamente en VidaLink. Redirigiendo a Solicitudes Activas...');
    window.location.href = 'solicitudes.html';
  });
}