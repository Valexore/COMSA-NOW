document.getElementById("logoutBtn").addEventListener('click', function () {
    console.log("clicked");
    fetch("../../../backend/api/logout.php", {
        method: "POST",
        credentials: "include",
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/comsa/COMSA-NOW/';
            } else {
                alert('Logout failed. Please try again.');
            }
        })
        .catch(err => {
            console.error('Logout error:', err);
            alert('Something went wrong during logout.');
        })

})