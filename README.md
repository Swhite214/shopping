# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## FSD 구조를 기반으로 프로젝트

```
src/
├── app/          # 앱 전역 설정
│   ├── styles/   # 전역 스타일
│   ├── providers/# 전역 프로바이더
│   └── config/   # 환경설정
├── pages/        # 페이지 컴포넌트
├── widgets/      # 복합 UI 블록
├── features/     # 기능 단위
│   ├── auth/
│   │   ├── api/     # API 호출
│   │   ├── model/   # 비즈니스 로직
│   │   └── ui/      # UI 컴포넌트
│   └── other-feature/
├── entities/     # 비즈니스 엔티티
│   └── user/
├── shared/       # 공통 모듈
    ├── api/      # API 설정
    ├── lib/      # 유틸리티
    └── ui/       # UI 컴포넌트
```