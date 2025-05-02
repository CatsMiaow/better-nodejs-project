# better-nodejs-project

Ways for a better Node.js backend project

## ECMAScript Modules (ESM)

For modern, future-proof Node.js development, adopting ESM over CommonJS provides standardized module syntax, improved compatibility across environments, and enhanced tooling support

- [Node.js Docs: ECMAScript modules](https://nodejs.org/docs/latest/api/esm.html)
- [MDN Docs: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## TypeScript

For preventing errors in your code with static analysis

- [TypeScript from scratch](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## NestJS Framework

For extensible architectural structures and production-ready functionality

- <https://docs.nestjs.com/#introduction>
- <https://discord.gg/nestjs>

## TypeScript ESLint

For correcting bad code and writing consistent code

- <https://typescript-eslint.io>

It is recommended to apply the known extended presets in addition to the basic rules \
The following rules are available in flat config in eslint v9

- [eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-github](https://github.com/github/eslint-plugin-github)
- [eslint-config-love](https://github.com/mightyiam/eslint-config-love)

## Conventional Commits

For consistent commit message

- <https://www.conventionalcommits.org>
- <https://commitlint.js.org>

## Semantic Versioning

For automatic versioning and changelog based on consistent commit messages

- [Automatically Version with Conventional Commits](https://nx.dev/recipes/nx-release/automatically-version-with-conventional-commits)
  - [nx release version](https://nx.dev/nx-api/nx/documents/release#version)
  - [nx release changelog](https://nx.dev/nx-api/nx/documents/release#changelog)
  - If you publish the project as a package, use [nx release publish](https://nx.dev/nx-api/nx/documents/release#publish).
- [Manage Releases](<https://nx.dev/features/manage-releases>)
  - [Get Started with Nx Release](https://nx.dev/recipes/nx-release/get-started-with-nx-release)

## Husky - Git hooks

For consistent work to avoid mistakes before committing

- <https://typicode.github.io/husky>
- [commitlint](https://commitlint.js.org), [lint-staged](https://www.npmjs.com/package/lint-staged), [check-dependencies](https://www.npmjs.com/package/check-dependencies), etc.

### Example

See the source [code](package.json) of this repository

### Links

Other helpful links

- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [JavaScript Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)
  - [Goodbye, Clean Code](https://overreacted.io/goodbye-clean-code)
- [JavaScript Questions](https://github.com/lydiahallie/javascript-questions)
- [Modern JavaScript Tutorial](https://javascript.info)
