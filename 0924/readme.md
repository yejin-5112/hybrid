# DIT 소개 앱 – 날씨 기능 추가

이 저장소는 동의과학대학교(DIT) 소개 앱의 소스코드입니다.  
2025-09-24 기준으로 **부산 날씨(중기예보)** 기능을 새로 추가했습니다.

## 🆕 이번 업데이트 내용

- **DIT 날씨 탭** 신설
- 기상청 중기육상예보 API를 이용하여  
  부산 4~7일 후 오전·오후 날씨 예보 표시

## 📱 주요 기능(전체)

- DIT 소개: 설립이념, 교육목표 등
- DIT 영상: 유튜브 홍보 영상
- DIT 음악: 교가 재생 및 가사 이미지
- DIT 갤러리: 학교 사진 갤러리
- **DIT 날씨(신규)**: 부산 4~7일 후 날씨 예보

## 🛠️ 사용 기술

- HTML5, CSS3, JavaScript
- [jQuery Mobile 1.4.5](https://jquerymobile.com/)
- [Cordova](https://cordova.apache.org/)
- [기상청 중기예보 API](https://www.data.go.kr/data/15057682/openapi.do)

## 🔑 API 키 설정

`index.html` 내 `<script>` 부분의 `serviceKey`를  
공공데이터포털에서 발급받은 **URL 인코딩된 인증키**로 교체하세요.
