
// DOWNLOAD MY RESUME
document.querySelector('.btn-resume').addEventListener('click', function() {
    const fileUrl = './assets/CV_Miftahur Rizki.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'CV_MIftahur Rizki.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});