const generateBtn = document.getElementById('generateBtn');
const qrInput = document.getElementById('qrInput');
const qrImage = document.getElementById('qrImage');

generateBtn.addEventListener('click', () => {
  const data = qrInput.value.trim();

  if (!data) {
    alert('Please enter text or URL');
    return;
  }

  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
  qrImage.src = apiUrl;
});
