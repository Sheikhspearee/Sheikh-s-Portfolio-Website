# Riyaaz Mahamed — Hunter x Hunter Themed 3D Portfolio

A React + Three.js portfolio built on the MIT-licensed
[reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio)
template by Liron Abutbul, re-themed as a Hunter x Hunter hunter profile.

Live: https://sheikhs-portfolio.netlify.app

## Theme mapping

| Section | HxH twist |
|---|---|
| About | Hunter License card + Nen types (Enhancer, Transmuter, Conjurer, Specialist) |
| Experience | Hunter Exam phases timeline |
| Skills | Nen Arsenal: 3D Nen orbs |
| Projects | Hunt Log |
| Certifications | Licenses & training |
| Contact | Messenger bird + 3D planet |

Hunter x Hunter is © Yoshihiro Togashi. This is an unofficial fan-style theme and uses no official artwork.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, Three.js (`@react-three/fiber`, `drei`), Framer Motion.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run lint
```

This project's `.npmrc` pins the public npm registry.

## Customize

Content lives in `src/constants/config.ts` and `src/constants/index.ts`. Colors are in `tailwind.config.cjs`.

The previous plain HTML/CSS/JS site is kept in `legacy/`.

## Deploy

Build command `npm run build`, publish directory `dist`.
