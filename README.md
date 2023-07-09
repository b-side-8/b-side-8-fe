## 비사이드 - 양동이 프로젝트

### 실행 방법

```zsh
git clone https://github.com/b-side-8/b-side-8-fe.git // 레포 클론
```

### .env.local 파일 생성

pakages/bucket 폴더에서 .env.local 파일 생성 후 아래 값 추가

```zsh
NEXT_PUBLIC_KAKAO_CLIENT_ID=20b68e93f8a5a97696de7503ec0e8315
NEXT_PUBLIC_KAKAO_CLIENT_SECRET=BUdRoo1prLNhdI6fi4CORWofhVzYBQE
```

### 패키지 설치 & 실행

```zsh
git checkout dev //dev 브랜치 전환

pnpm install

pnpm dev:next-app // http://localhost:3000 에서 실행
```
