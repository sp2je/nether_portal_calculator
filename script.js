document.getElementById('coordinateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출을 막아 페이지 새로 고침을 방지합니다.

    const x = parseInt(document.getElementById('xCoordinate').value);
    const z = parseInt(document.getElementById('zCoordinate').value);

    // 입력값이 유효한지 체크
    if (isNaN(x) || isNaN(z)) {
        document.getElementById('output').textContent = "유효한 좌표 값을 입력하세요.";
        return;
    }

    // 지옥문 좌표 계산 (예시)
    const netherX = Math.floor(x / 8);  // 정수 값으로 계산
    const netherZ = Math.floor(z / 8);  // 정수 값으로 계산

    // 결과 출력 (정수로 표시)
    const resultText = `지옥문 좌표: X = ${netherX}, Z = ${netherZ}`;
    document.getElementById('output').textContent = resultText;

    // 복사 버튼 보이기
    const copyButton = document.getElementById('copyButton');
    copyButton.style.display = 'inline-block';

    // 복사 버튼 클릭 시 동작
    copyButton.addEventListener('click', function() {
        // 숫자만 복사 (결과에서 "X ="와 "Z ="를 제외한 값만)
        const copyText = `${netherX} ${netherZ}`;
        
        // 클립보드에 숫자만 복사
        navigator.clipboard.writeText(copyText)
            .catch(function(error) {
                console.error('복사 실패: ', error);
            });
    });
});