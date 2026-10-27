# HYEOM GitHub Pages

혜옴 홈페이지의 GitHub Pages용 정적 HTML 버전입니다.

## 공개 방법

1. GitHub에서 새 저장소를 만듭니다. 공개 사이트라면 `Public` 저장소를 선택합니다.
2. 이 폴더 안의 모든 파일과 폴더를 저장소 최상단에 업로드합니다. `index.html`이 저장소 루트에 있어야 합니다.
3. 저장소의 `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`의 Source를 `Deploy from a branch`로 선택합니다.
5. Branch를 `main`, 폴더를 `/(root)`로 선택하고 저장합니다.
6. 잠시 후 표시되는 GitHub Pages 주소로 사이트를 확인합니다.

## 구성

- `index.html`: 사이트 본문
- `styles.css`: 반응형 디자인
- `script.js`: 메뉴, 탭, 아코디언, 포트폴리오 동작
- `assets/`: 포트폴리오 이미지와 회사소개서 PDF
- `favicon.svg`: 브라우저 아이콘

## 참고

- 모든 경로는 GitHub Pages의 프로젝트 저장소 주소에서도 작동하도록 상대경로로 구성되어 있습니다.
- 회사소개서 PDF 다운로드 기능이 포함되어 있습니다.
- 현재 상담 폼은 안내 메시지만 표시하는 정적 폼입니다. 실제 문의 전송이 필요하면 별도의 폼 서비스나 서버 연결이 필요합니다.
- Google Fonts를 사용하므로 방문자의 인터넷 연결이 필요합니다.
