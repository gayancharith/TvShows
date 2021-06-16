# TV Shows & Movies

This application has developed using Next.js, Tailwind CSS and Typescript.

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the application live on [TV-Shows & Movies](https://tv-shows-teal.vercel.app/)

## How to run the application

1. Go to the https://www.themoviedb.org/ ,create a account and get the api key from settings section.
2. create .env.local in the root folder of the project and paste the below code with your api key.

```bash
API_KEY=<your-api-key>
```

3. Run the following commands to install dependencies and run the application

```
yarn
yarn dev
```

Testing for this application is written with cypress

## Run e2e tests

```
yarn cypress:open
```

## Run component tests

```
yarn cypress:open-ct
```
