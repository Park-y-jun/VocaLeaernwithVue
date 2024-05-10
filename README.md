# VocaLeaern (단어암기 프로그램)
## 기술 스택
1. Javascript
2. Vue3
3. Html
4. Css3
5. Vite
6. Axios
## 프로젝트 소개
VocaLearner = Vocabulary + Learn + er</br>
즉 단어 공부를 하는 도구라는 뜻이다. 일본어 전공자였던 본인이 "어떻게 하면 일본어 단어를 단순히 공책에 쓰는 방식이 아닌 쉽고 간편하게 규칙적인 암기를 할 수 있을까?" 라는 고민에서 시작된 프로젝트이다.</br>
단어들을 목적에 맞게 리스트에 모아두고, 암기 이해도에 따라서 등장하는 빈도수를 조절해주는 패턴으로 이루어져있다.
## 백엔드 API 저장소
https://github.com/Park-y-jun/VocaLearnerBE2
## API 문서
🔗 [문서 링크](https://honored-hare-249.notion.site/VocaLeaner-API-c722386c83eb4ea582df6697ea32c012?pvs=4)
## 실행조건
Node.js 버전 : 18.13.0<br>
npm (Node Package Manager)<br>
MongoDB Atlas
### 설치 방법
1. 프로젝트 클론

```
 $ git clone https://github.com/Park-y-jun/VocaLearnerBE2.git
```
- git hub의 clone 버튼을 눌러 레포지토리를 클론하고 터미널에서 위의 명령어를 실행합니다.

2. 의존성 설치
```
  $ npm install
```
- 프로젝트 폴더로 이동한 후 프로젝트에 필요한 의존성을 설치합니다. (로컬 디렉토리의 package.json에서 확인 가능)
  
3. 환경변수  
- env.example 파일 참조

4. 프로젝트 실행
```
  $ npm run vocaLearn
```  
## 디렉토리 구조
```
src
 ┣ components
 ┃ ┣ auth
 ┃ ┃ ┣ LoginForm.vue
 ┃ ┃ ┗ RegisterForm.vue
 ┃ ┣ deck
 ┃ ┃ ┗ DeckList.vue
 ┃ ┣ nav
 ┃ ┃ ┗ TheHeader.vue
 ┃ ┣ question
 ┃ ┃ ┣ AddForm.vue
 ┃ ┃ ┗ QuestionAnswer.vue
 ┃ ┗ ui
 ┃ ┃ ┣ BaseButton.vue
 ┃ ┃ ┣ BasicForm.vue
 ┃ ┃ ┗ NavButton.vue
 ┣ pages
 ┃ ┣ AddQuestion.vue
 ┃ ┣ MainPage.vue
 ┃ ┣ SignIn.vue
 ┃ ┣ SignUp.vue
 ┃ ┗ VocaLearn.vue
 ┣ store
 ┃ ┣ modules
 ┃ ┃ ┣ deck.js
 ┃ ┃ ┣ is.js
 ┃ ┃ ┗ question.js
 ┃ ┗ index.js
 ┣ utils
 ┃ ┗ errorHandler.js
 ┣ App.vue
 ┣ main.js
 ┗ router.js
```
## 주요기능 
### 단어 문제 
[시연 비디오](https://github.com/Park-y-jun/VocaLeaernwithVue/assets/112556759/9b25aadf-0c7a-4c0d-9668-6e54adb1e62c)

- 단어장에 단어 문제를 저장하고 암기 학습을 진행할 수 있습니다.
- '쉬움', '중간', '어려움' 난이도 선택에 따라서 단어 문제의 반복 출제 시기가 바뀝니다. (쉬움: 3일 이후, 중간: 2일 이후, 어려움: 1일 이후)
___
### 회원가입 / 로그인
[시연 비디오](https://github.com/Park-y-jun/VocaLeaernwithVue/assets/112556759/f29853a7-1ee2-4c1f-b84e-38a54564b5bd)
- 루트 URL에 접속하면 '/sign-in' 으로 리다이렉트 되고 회원가입 / 로그인 기능을 통해서 메인페이지로 접속 할 수 있습니다.
- 사용자의 로그인 상태는 로그인 후 발급되는 토큰을 로컬스토리지에 보관하여서 확인 가능합니다.
___
### 단어장 추가/ 단어 문제 추가
[시연 비디오](https://github.com/Park-y-jun/VocaLeaernwithVue/assets/112556759/cd7bc0d2-e885-4e1e-9493-4fef27d4ecc2)
- newdeck 버튼을 이용해 단어장을 생성하고, 단어 문제를 추가할 수 있습니다.
## Vuex 전역관리
![vuex](https://github.com/Park-y-jun/VocaLeaernwithVue/assets/112556759/8b8c53fc-1a93-4968-aa2e-5697f6756480)
- 어플리케이션의 핵심 객체 user, deck, question의 데이터를 모듈화 컴포넌트에서 전역적으로 상태관리 할 수 있도록 구성 했습니다.

