function openTab(tabId) {
    // 모든 탭 내용 숨기기
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // 선택한 탭 내용 보이기
    const selectedTabContent = document.getElementById(tabId);
    selectedTabContent.classList.add('active');

    // 모든 탭 버튼 비활성화
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // 선택한 탭 버튼 활성화
    const selectedTabButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    selectedTabButton.classList.add('active');
}
