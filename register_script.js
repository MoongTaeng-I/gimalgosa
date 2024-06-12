// JavaScript file for register.html
document.addEventListener('DOMContentLoaded', () => {
    console.log('Register Page Loaded');

    // 회원가입 폼 제출 이벤트
    document.querySelector('.register-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
        } else {
            alert('회원가입 기능은 아직 구현되지 않았습니다.');
        }
    });
});
