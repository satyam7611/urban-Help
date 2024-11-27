document.querySelector('.pincode-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const pincode = document.querySelector('#pincode').value;
    if (pincode) {
        alert(`Showing helpers for pincode: ${pincode}`);
    } else {
        alert('Please select a pincode.');
    }
});



