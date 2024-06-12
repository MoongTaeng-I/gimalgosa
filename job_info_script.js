document.addEventListener('DOMContentLoaded', () => {
    console.log('Job Info Page Loaded');
    // 검색 버튼 클릭 시 이벤트 핸들러 추가
    const searchForm = document.querySelector('.basic-search form');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // 여기서 검색 로직을 추가합니다.
        console.log('Search submitted');
    });

    // 지원 버튼 클릭 시 이벤트 핸들러 추가
    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 지원하기 로직을 추가합니다.
            alert('지원이 완료되었습니다.');
        });
    });
});
