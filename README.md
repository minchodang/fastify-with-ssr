# my-turbo-repo/my-turbo-repo/README.md

# My Turbo Repo

이 프로젝트는 Turbo를 사용하여 구성된 모노레포입니다. 이 레포는 클라이언트와 서버 애플리케이션을 포함하며, TypeScript와 ESLint 설정이 포함되어 있습니다.

## 프로젝트 구조

```
my-turbo-repo
├── apps
│   ├── client        # 클라이언트 애플리케이션
│   └── server        # 서버 애플리케이션
├── packages
│   └── shared        # 클라이언트와 서버에서 공유되는 코드
├── turbo.json        # Turbo 설정 파일
├── package.json      # 루트 패키지 설정
└── tsconfig.json     # 루트 TypeScript 설정
```

## 시작하기

1. **의존성 설치**: 루트 디렉토리에서 다음 명령어를 실행하여 모든 의존성을 설치합니다.
   ```
   npm install
   ```

2. **개발 서버 실행**: 클라이언트 또는 서버 애플리케이션을 개발 모드로 실행하려면 다음 명령어를 사용합니다.
   - 클라이언트:
     ```
     npm run dev --workspace=apps/client
     ```
   - 서버:
     ```
     npm run dev --workspace=apps/server
     ```

3. **빌드**: 전체 애플리케이션을 빌드하려면 다음 명령어를 실행합니다.
   ```
   npm run build
   ```

## ESLint

코드 품질 유지를 위해 ESLint를 사용합니다. 다음 명령어로 코드를 린트할 수 있습니다.
```
npm run lint
```

## 기여

기여를 원하신다면, 이 레포를 포크한 후 변경 사항을 제안해 주세요. 모든 기여는 환영합니다!