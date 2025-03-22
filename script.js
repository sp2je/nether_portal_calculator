function calculateOverworldToNether() {
    const xCoord = parseFloat(document.getElementById("overworld-x").value);
    const zCoord = parseFloat(document.getElementById("overworld-z").value);

    if (isNaN(xCoord) || isNaN(zCoord)) {
        alert("오버월드 좌표를 정확히 입력하세요.");
        return;
    }

    // 오버월드 -> 네더 좌표 계산
    const overworldToNetherX = xCoord * 8;
    const overworldToNetherZ = zCoord * 8;

    // 결과 출력
    const resultText = `네더 X: ${overworldToNetherX}, Z: ${overworldToNetherZ}`;
    document.getElementById("result-overworld-to-nether").innerText = resultText.trim();

    // 복사 버튼 표시
    document.getElementById("copy-overworld-to-nether").style.display = 'block';
}

function calculateNetherToOverworld() {
    const xCoord = parseFloat(document.getElementById("nether-x").value);
    const zCoord = parseFloat(document.getElementById("nether-z").value);

    if (isNaN(xCoord) || isNaN(zCoord)) {
        alert("네더 좌표를 정확히 입력하세요.");
        return;
    }

    // 네더 -> 오버월드 좌표 계산
    const netherToOverworldX = xCoord / 8;
    const netherToOverworldZ = zCoord / 8;

    // 결과 출력
    const resultText = `오버월드 X: ${netherToOverworldX}, Z: ${netherToOverworldZ}`;
    document.getElementById("result-nether-to-overworld").innerText = resultText.trim();

    // 복사 버튼 표시
    document.getElementById("copy-nether-to-overworld").style.display = 'block';
}

function copyToClipboard(resultId) {
    // 결과 텍스트 가져오기
    const resultText = document.getElementById(resultId).innerText;
    
    // 숫자만 추출하고 공백이 여러 칸일 경우 하나로 변경
    const numbersOnly = resultText.replace(/[^0-9\s-]/g, '').replace(/\s+/g, ' ').trim(); // 공백 하나로 합치기

    // 임시 textarea 생성
    const textarea = document.createElement('textarea');
    textarea.value = numbersOnly;
    document.body.appendChild(textarea);

    // 텍스트 선택 및 복사
    textarea.select();
    document.execCommand('copy');
    
    // 임시 textarea 제거
    document.body.removeChild(textarea);
}
