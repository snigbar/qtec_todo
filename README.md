## Next Todo

### [Live Preview](https://qtec-todo-six.vercel.app/)

#### simple todo aplication With typeScript and Next Js

(This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
)

### Technology Used

- Next Js
- TypeScript
- Local Storage
- Context API

#### How to use this:

First, visit the live site [link](https://qtec-todo-six.vercel.app/). Here you will see a text field to add your todo. Enter your task there, select the priority among 'high', 'moderate', and 'low', then click on the 'Add' button. You can edit or delete your task using the corresponding icons. If a task is completed, check the 'Completed' box.

#### How to run this:

Clone this repository to your local machine and run the command "npm install" to install all the dependencies. Then run the command "npm run dev" to start it in a local server.

#### How this Works:

This project uses browser local storage to store data from the user. When you add a task, it creates a key in local storage and stores the data as an array of objects. It also displays those data in the UI. When editing or deleting data, it retrieves the data from local storage by the ID of the data and performs the required action. It also utilizes the context API feature to manage the data throughout the app.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
