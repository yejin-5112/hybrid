# 📱 코르도바(Cordova)를 활용한 앱 개발 수업

## 1. 수업 개요
- **목표**: 웹 기술(HTML, CSS, JavaScript)을 활용해 하이브리드 모바일 앱을 개발할 수 있다.
- **대상**: 웹 기초(HTML, CSS, JS)를 이해한 학생
- **개발 환경**: 
  - Node.js
  - Cordova CLI
  - Android Studio (또는 Xcode, 선택)
  - VS Code / WebStorm 등

---

## 2. 코르도바(Cordova) 소개
- **정의**: 웹 기술로 iOS, Android 등 다양한 플랫폼의 앱을 제작할 수 있는 오픈소스 프레임워크
- **특징**:
  - 단일 코드베이스로 다중 플랫폼 지원
  - 플러그인 시스템을 통해 네이티브 기능 접근 가능 (카메라, GPS, 파일 등)
  - 빠른 프로토타이핑 및 배포 가능

---

## 3. 개발 환경 구축
1. **Node.js 설치**
   - [Node.js 공식 사이트](https://nodejs.org)에서 LTS 버전 다운로드 및 설치
2. **Cordova CLI 설치**
   ```bash
   npm install -g cordova
   ```
3. **플랫폼별 개발 도구 설치**
   - **Android**: Android Studio + SDK
   - **iOS**: Xcode (Mac OS 필요)
4. **프로젝트 생성**
   ```bash
   cordova create myApp com.example.myapp MyApp
   cd myApp
   ```

---

## 4. 앱 개발 기본 흐름
1. **프로젝트 생성**
   ```bash
   cordova create myApp com.example.myapp MyApp
   ```
2. **플랫폼 추가**
   ```bash
   cordova platform add android
   cordova platform add ios
   ```
3. **앱 실행**
   ```bash
   cordova run android
   cordova emulate ios
   ```
4. **웹 리소스 수정**
   - `www/` 폴더에서 HTML, CSS, JS 파일 수정

---

## 5. 코르도바 플러그인 활용
- **플러그인 추가 예시**: 카메라
  ```bash
  cordova plugin add cordova-plugin-camera
  ```
- **자바스크립트 코드 예시**
  ```javascript
  navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI
  });

  function onSuccess(imageURI) {
      document.getElementById('myImage').src = imageURI;
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
  ```

---

## 6. 수업 진행 순서
1. **OT & 환경설정**
   - Cordova 개요 및 개발 환경 세팅
2. **기본 앱 제작**
   - 프로젝트 생성 → 플랫폼 추가 → 기본 앱 실행
3. **UI/UX 설계**
   - HTML/CSS/JS를 활용한 앱 화면 구성
4. **플러그인 실습**
   - 카메라, 위치, 파일 등 기본 플러그인 활용
5. **앱 빌드 & 배포**
   - APK(안드로이드) 또는 IPA(iOS) 빌드
   - 실제 기기에 설치 및 테스트
6. **최종 프로젝트**
   - 학생별 아이디어 기반 하이브리드 앱 제작

---

## 7. 평가 방법
- **출석 & 참여도**: 20%
- **실습 과제**: 30%
- **중간 프로젝트**: 20%
- **최종 프로젝트**: 30%

---

## 8. 기대 효과
- 웹 기술을 활용하여 모바일 앱 개발 역량 강화
- 크로스 플랫폼 앱 개발 경험 습득
- 아이디어를 빠르게 앱으로 구현할 수 있는 능력 배양

---
