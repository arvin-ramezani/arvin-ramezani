# Public repository guide

[Profile](./README.md) · [Structured index](./projects.json)

A reading map for the public repositories on [Arvin Ramezani's GitHub](https://github.com/arvin-ramezani). Reviewed 8 October 2026.

Start with the current public work, then choose a study or experiment that matches your interest. Entries describe visible code or documents; test links show test sources, not a claim that those tests currently pass.

## Current public work

| Repository | What to explore |
| --- | --- |
| [imarvin](https://github.com/arvin-ramezani/imarvin) | Personal web app with project stories, private editing, and publishing; in development.<br>[Product brief](https://github.com/arvin-ramezani/imarvin/blob/main/PRD.md) · [Architecture](https://github.com/arvin-ramezani/imarvin/blob/main/docs/architecture/architecture.md) · [Work implementation](https://github.com/arvin-ramezani/imarvin/tree/main/features/work) · [Tests](https://github.com/arvin-ramezani/imarvin/tree/main/tests) |
| [Unixsee monorepo](https://github.com/arvin-ramezani/unixsee-monorepo) | Managed WordPress and WooCommerce infrastructure: NestJS control plane, monitoring agent, and Next.js surfaces. Frontend integration is bounded by the UI-only phase ADR.<br>[System overview](https://github.com/arvin-ramezani/unixsee-monorepo/blob/main/docs/architecture/overview.md) · [UI phase boundaries](https://github.com/arvin-ramezani/unixsee-monorepo/blob/main/docs/architecture/decisions/0003-ui-only-phase-boundaries.md) · [Backend](https://github.com/arvin-ramezani/unixsee-monorepo/tree/main/backend/src) · [Agent](https://github.com/arvin-ramezani/unixsee-monorepo/blob/main/agent/README.md) |
| [ai-skills](https://github.com/arvin-ramezani/ai-skills) | Portable AI-agent skills for architecture, documentation, product design, React, and testing.<br>[Skill catalog](https://github.com/arvin-ramezani/ai-skills/blob/main/README.md) · [Architecture advisor](https://github.com/arvin-ramezani/ai-skills/blob/main/skills/software-architecture-advisor/SKILL.md) · [Installation](https://github.com/arvin-ramezani/ai-skills/blob/main/scripts/install_skill.py) · [Packaging](https://github.com/arvin-ramezani/ai-skills/blob/main/scripts/package_skill.py) |
| [CI See](https://github.com/arvin-ramezani/ci-see) | Planning and specifications for local GitHub Actions execution through act and developer-controlled Git gating; no CLI implementation in the reviewed default branch.<br>[Requirements](https://github.com/arvin-ramezani/ci-see/blob/main/docs/prd.md) · [Architecture](https://github.com/arvin-ramezani/ci-see/blob/main/docs/architecture.md) · [Git gating](https://github.com/arvin-ramezani/ci-see/blob/main/docs/specs/git-gating.md) |

## Application studies

| Repository | What to explore |
| --- | --- |
| [React task list](https://github.com/arvin-ramezani/react-task-list) | Drag-and-drop task board; README explains handling delayed state changes during dragging. Includes unit and Cypress test sources.<br>[Problem and solution](https://github.com/arvin-ramezani/react-task-list/blob/main/README.md) · [State reducer](https://github.com/arvin-ramezani/react-task-list/blob/main/src/context/tasksReducer.tsx) · [Unit tests](https://github.com/arvin-ramezani/react-task-list/tree/main/tests) · [Cypress](https://github.com/arvin-ramezani/react-task-list/tree/main/cypress) |
| [React weather app](https://github.com/arvin-ramezani/react-weather-app) | React, Vite, and TypeScript weather app with API-driven city search and Vitest component-test sources.<br>[Overview](https://github.com/arvin-ramezani/react-weather-app/blob/main/README.md) · [Weather UI](https://github.com/arvin-ramezani/react-weather-app/tree/main/src/components/Weather) · [Response tests](https://github.com/arvin-ramezani/react-weather-app/blob/main/src/utils/helpers/transformResponse.test.ts) |
| [pizza-shop](https://github.com/arvin-ramezani/pizza-shop) | Next.js and TypeScript food-ordering study with authentication, cart, orders, animation, and component-test sources.<br>[Pages and API](https://github.com/arvin-ramezani/pizza-shop/tree/main/pages) · [Components](https://github.com/arvin-ramezani/pizza-shop/tree/main/components) · [Tests](https://github.com/arvin-ramezani/pizza-shop/tree/main/__tests__) |
| [MERN watch shop](https://github.com/arvin-ramezani/MERN-simple-watch-shop) | Watch-shop study using React, TypeScript, Redux Toolkit, MUI, forms, and an Express backend with MongoDB.<br>[Client](https://github.com/arvin-ramezani/MERN-simple-watch-shop/tree/master/client/src) · [Server](https://github.com/arvin-ramezani/MERN-simple-watch-shop/tree/master/server/src) |
| [MERN animals app](https://github.com/arvin-ramezani/MERN-animals-house) | Animal-listing app study with React, Redux Toolkit, animation, and access/refresh-token authentication.<br>[Client](https://github.com/arvin-ramezani/MERN-animals-house/tree/master/client/src) · [Server](https://github.com/arvin-ramezani/MERN-animals-house/tree/master/server/src) |
| [MERN blog](https://github.com/arvin-ramezani/MERN-stack-blog) | React/Redux Toolkit blog study with an Express and MongoDB backend.<br>[Client](https://github.com/arvin-ramezani/MERN-stack-blog/tree/master/client/src) · [Server](https://github.com/arvin-ramezani/MERN-stack-blog/tree/master/server) |
| [shopping-cart](https://github.com/arvin-ramezani/shopping-cart) | Earlier React/Redux shopping-cart and book-list UI study; README is framework boilerplate.<br>[Cart UI](https://github.com/arvin-ramezani/shopping-cart/tree/master/src/components/ShoppingCart) · [Redux state](https://github.com/arvin-ramezani/shopping-cart/tree/master/src/redux/shopping) |
| [Next.js auth study](https://github.com/arvin-ramezani/next-14-next-auth) | Next.js authentication-provider practice with credentials, GitHub, Google, and email. Reviewed default branch is feat/email-only.<br>[Auth options](https://github.com/arvin-ramezani/next-14-next-auth/blob/feat/email-only/app/api/auth/[...nextauth]/options.ts) · [Auth pages](https://github.com/arvin-ramezani/next-14-next-auth/tree/feat/email-only/app/%28auth%29) · [Middleware](https://github.com/arvin-ramezani/next-14-next-auth/blob/feat/email-only/middleware.ts) |

## Interface explorations

`web-studio`, `velorian`, and `replit` are related studio-site explorations.

| Repository | What to explore |
| --- | --- |
| [portfolio](https://github.com/arvin-ramezani/portfolio) | Earlier personal-site implementation using Next.js, TypeScript, Framer Motion, styled-components, and Three.js.<br>[Homepage](https://github.com/arvin-ramezani/portfolio/blob/master/pages/index.tsx) · [Components](https://github.com/arvin-ramezani/portfolio/tree/master/components) |
| [web-studio](https://github.com/arvin-ramezani/web-studio) | Studio-site experiment in a pnpm workspace; related to the velorian and replit explorations.<br>[Studio source](https://github.com/arvin-ramezani/web-studio/tree/main/artifacts/studio-site/src) · [Workspace notes](https://github.com/arvin-ramezani/web-studio/blob/main/replit.md) |
| [velorian](https://github.com/arvin-ramezani/velorian) | Next.js studio-site exploration with English/Persian messages and themed components; related to web-studio and replit.<br>[Localized pages](https://github.com/arvin-ramezani/velorian/tree/main/src/app) · [Components](https://github.com/arvin-ramezani/velorian/tree/main/src/components) · [Messages](https://github.com/arvin-ramezani/velorian/tree/main/messages) |
| [replit](https://github.com/arvin-ramezani/replit) | Workspace experiment with studio-site and Express API source; related to web-studio and velorian.<br>[Studio source](https://github.com/arvin-ramezani/replit/tree/main/artifacts/studio-site/src) · [API source](https://github.com/arvin-ramezani/replit/tree/main/artifacts/api-server/src) · [Workspace notes](https://github.com/arvin-ramezani/replit/blob/main/replit.md) |
| [Next.js](https://github.com/arvin-ramezani/Next.js) | Earlier interface study using Next.js, TypeScript, and Framer Motion; README is framework boilerplate.<br>[Page](https://github.com/arvin-ramezani/Next.js/blob/main/pages/index.tsx) · [Components](https://github.com/arvin-ramezani/Next.js/tree/main/components) |
| [jobinja-jobs](https://github.com/arvin-ramezani/jobinja-jobs) | Persian RTL job-search interface exercise using HTML, CSS, and JavaScript; no README.<br>[Page](https://github.com/arvin-ramezani/jobinja-jobs/blob/master/index.html) · [Styles](https://github.com/arvin-ramezani/jobinja-jobs/tree/master/styles) · [JavaScript](https://github.com/arvin-ramezani/jobinja-jobs/tree/master/js) |

## Backend studies

Several earlier repositories retain a default framework README. The links below lead directly to the relevant source.

| Repository | What to explore |
| --- | --- |
| [Student CRUD API](https://github.com/arvin-ramezani/simple-nodejs-crud-api) | Express and TypeScript student CRUD API with MongoDB, validation, Swagger, and Vitest and Supertest test sources.<br>[API guide](https://github.com/arvin-ramezani/simple-nodejs-crud-api/blob/master/README.md) · [Validation](https://github.com/arvin-ramezani/simple-nodejs-crud-api/tree/master/src/middlewares) · [Route tests](https://github.com/arvin-ramezani/simple-nodejs-crud-api/tree/master/src/routes/__test__) |
| [Task Manager API](https://github.com/arvin-ramezani/NestJs-Postgresql-Task_Manager-API) | NestJS task API study using PostgreSQL and TypeORM; README is framework boilerplate.<br>[Task module](https://github.com/arvin-ramezani/NestJs-Postgresql-Task_Manager-API/tree/main/src/task) · [Manifest](https://github.com/arvin-ramezani/NestJs-Postgresql-Task_Manager-API/blob/main/package.json) |
| [TypeORM GraphQL](https://github.com/arvin-ramezani/NestJs-TypeOrm-graphql) | NestJS, GraphQL, and TypeORM study with employee and project modules; README is framework boilerplate.<br>[Employee module](https://github.com/arvin-ramezani/NestJs-TypeOrm-graphql/tree/main/src/employee) · [Project module](https://github.com/arvin-ramezani/NestJs-TypeOrm-graphql/tree/main/src/project) |
| [NestJS GraphQL](https://github.com/arvin-ramezani/nestjs-graphql) | NestJS GraphQL and TypeORM study with pet and owner resolvers; README is framework boilerplate.<br>[Pet module](https://github.com/arvin-ramezani/nestjs-graphql/tree/main/src/pets) · [Owner module](https://github.com/arvin-ramezani/nestjs-graphql/tree/main/src/owners) |
| [NestJS authentication](https://github.com/arvin-ramezani/nestjs-authentication) | NestJS access/refresh-token authentication study with Prisma; README is framework boilerplate.<br>[Auth source](https://github.com/arvin-ramezani/nestjs-authentication/tree/main/src/auth) · [Prisma](https://github.com/arvin-ramezani/nestjs-authentication/tree/main/prisma) |
| [NestJS RabbitMQ](https://github.com/arvin-ramezani/nestjs-rabbitmq) | NestJS multi-app RabbitMQ, MongoDB, and Docker study with auth, billing, and orders surfaces; README is framework boilerplate.<br>[Applications](https://github.com/arvin-ramezani/nestjs-rabbitmq/tree/main/apps) · [Shared libraries](https://github.com/arvin-ramezani/nestjs-rabbitmq/tree/main/libs) · [Compose](https://github.com/arvin-ramezani/nestjs-rabbitmq/blob/main/docker-compose.yaml) |
| [Real estate API](https://github.com/arvin-ramezani/nest.js-realtor-app) | NestJS real-estate API study with Prisma and PostgreSQL, Swagger, and unit-test sources; README is framework boilerplate.<br>[Home module and tests](https://github.com/arvin-ramezani/nest.js-realtor-app/tree/main/src/home) · [Auth source and tests](https://github.com/arvin-ramezani/nest.js-realtor-app/tree/main/src/user/auth) · [Prisma](https://github.com/arvin-ramezani/nest.js-realtor-app/tree/main/prisma) |
| [MongoDB repositories](https://github.com/arvin-ramezani/nestjs-mongodb-repository) | NestJS and MongoDB repository-pattern study with employee and vehicle repositories; README is framework boilerplate.<br>[Repositories](https://github.com/arvin-ramezani/nestjs-mongodb-repository/tree/main/src/employees/repositories) · [Schemas](https://github.com/arvin-ramezani/nestjs-mongodb-repository/tree/main/src/employees/schemas) |
| [nest-socket.io](https://github.com/arvin-ramezani/nest-socket.io) | NestJS and Socket.IO chat-gateway study; README is framework boilerplate.<br>[Chat gateway](https://github.com/arvin-ramezani/nest-socket.io/blob/main/src/gateway/chatroom.gateway.ts) · [Client assets](https://github.com/arvin-ramezani/nest-socket.io/tree/main/public) |
| [gRPC tutorial](https://github.com/arvin-ramezani/gRPC-node-tutorial) | Node.js and TypeScript gRPC exercise with unary and streaming examples; no README.<br>[Server](https://github.com/arvin-ramezani/gRPC-node-tutorial/blob/main/server.ts) · [Client](https://github.com/arvin-ramezani/gRPC-node-tutorial/blob/main/client.ts) · [Protocol](https://github.com/arvin-ramezani/gRPC-node-tutorial/tree/main/proto) |
| [TypeORM CLI](https://github.com/arvin-ramezani/express-typeorm-cli) | Express and TypeORM CLI study with banker, client, and transaction entities.<br>[Controllers](https://github.com/arvin-ramezani/express-typeorm-cli/tree/main/src/controller) · [Entities](https://github.com/arvin-ramezani/express-typeorm-cli/tree/main/src/entity) |
| [Express TypeORM](https://github.com/arvin-ramezani/express-typeOrm) | Express and TypeORM tutorial with banker, client, and transaction routes.<br>[Routes](https://github.com/arvin-ramezani/express-typeOrm/tree/main/src/routes) · [Entities](https://github.com/arvin-ramezani/express-typeOrm/tree/main/src/entities) · [Notes](https://github.com/arvin-ramezani/express-typeOrm/blob/main/readme) |
| [simple-api](https://github.com/arvin-ramezani/simple-api) | Small NestJS email API with DTOs, configuration helpers, and setup instructions.<br>[Email module](https://github.com/arvin-ramezani/simple-api/tree/main/src/emails) · [Setup](https://github.com/arvin-ramezani/simple-api/blob/main/README.md) |

## Forks and references

| Repository | What to explore |
| --- | --- |
| [AI tools reference](https://github.com/arvin-ramezani/awesome-ai-tools) | Forked AI-tools reference list; distinguish upstream content from original implementation work. [Upstream](https://github.com/mahseema/awesome-ai-tools).<br>[Reference list](https://github.com/arvin-ramezani/awesome-ai-tools/blob/main/README.md) |
| [AI image example](https://github.com/arvin-ramezani/next-image-ai-transformation) | Forked Next.js and Cloudinary AI image-transformation example. [Upstream](https://github.com/HamedBahram/next-image).<br>[Transformation page](https://github.com/arvin-ramezani/next-image-ai-transformation/blob/main/app/transform/page.tsx) · [Manifest](https://github.com/arvin-ramezani/next-image-ai-transformation/blob/main/package.json) |

## Profile and placeholder

| Repository | What to explore |
| --- | --- |
| [arvin-ramezani](https://github.com/arvin-ramezani/arvin-ramezani) | This GitHub profile, public repository guide, and structured repository index.<br>[Profile](./README.md) · [Repository guide](./REPOSITORIES.md) · [Structured index](./projects.json) |
| [Vue placeholder](https://github.com/arvin-ramezani/Random-user-vue.3) | Empty repository at review time; metadata describes a Vue random-user idea, but no implementation is available. |

## Reading a project

1. Read its purpose and current scope in the README or product brief.
2. Use architecture docs and decisions where they exist; compare plans with the source tree.
3. Inspect the relevant implementation and tests, then check current PRs and CI for validation evidence.

[projects.json](./projects.json) provides the same public inventory with repository names, categories, default branches, and direct entry-point URLs.

