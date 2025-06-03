## build project
npm install
npm install lucide-react shadcn/ui tailwindcss class-variance-authority clsx
npx tailwindcss init -p

- cole isto no arquivo,tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

npm install class-variance-authority clsx tailwind-variants
npx shadcn-ui@latest init


##  RUN project
  cd techK3L-site
  npm install
  npm run dev