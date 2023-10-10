
document.addEventListener('DOMContentLoaded', function () {
    const editProfileButton = document.getElementById('edit-profile');
    const saveProfileButton = document.getElementById('save-profile');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const location = document.getElementById('location');
    const profilePicture = document.getElementById('profile-picture');

    editProfileButton.addEventListener('click', function () {
        username.contentEditable = true;
        email.contentEditable = true;
        location.contentEditable = true;
        profilePicture.style.border = '2px solid #333';
        saveProfileButton.style.display = 'block';
        editProfileButton.style.display = 'none';
    });

    saveProfileButton.addEventListener('click', function () {
        username.contentEditable = false;
        email.contentEditable = false;
        location.contentEditable = false;
        profilePicture.style.border = 'none';
        saveProfileButton.style.display = 'block';
        editProfileButton.style.display = 'block';
    });
    profilePicture.addEventListener('click', function () {
        profilePictureUpload.click();
    });
    profilePictureUpload.addEventListener('change', function () {
        // Handle profile picture upload
        const file = profilePictureUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
