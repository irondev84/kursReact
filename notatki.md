 Instalacje 
node -v 
v20.10.0

npm -v 
10.2.3

git -v
git version 2.43.0.windows.1

code -v
1.89.1

# GIT
F1 -> Clone -> Paste: 
https://bitbucket.org/ev45ive/sages-react-open-maj.git 
-> Clone from URL -> Select repository destination -> Open window


View -> Terminal (Ctrl+~)
git clone https://bitbucket.org/ev45ive/sages-react-open-maj.git sages-react-open-maj
cd sages-react-open-maj
code sages-react-open-maj

# Vite
https://vitejs.dev/guide/

 npm create vite@latest
Need to install the following packages:
create-vite@5.2.3
Ok to proceed? (y) y
√ Project name: ... sagesreact
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in C:\Projects\sages-react-open-maj\sagesreact...

Done. Now run:

  cd sagesreact
  npm install  
  npm run dev  

# Extensions
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode 
+ eslint + eslint-prettier
https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors

https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

# UI Components
https://mui.com/material-ui/react-button/
https://primereact.org/installation/ 

https://www.radix-ui.com/themes/docs/components/alert-dialog

# Tailwind
https://tailwindcss.com/docs/guides/vite

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

tailwind.config.js already exists.
Created PostCSS config file: postcss.config.js

# Headless
https://headlessui.com/react/menu

# Prime react
npm install primereact

# Playlists

mkdir -p src/playlists/containers
mkdir -p src/playlists/components 

touch src/playlists/containers/PlaylistsView.tsx

touch src/playlists/components/PlaylistList.tsx
touch src/playlists/components/PlaylistDetails.tsx
touch src/playlists/components/PlaylistEditor.tsx

# Hooks

- useState
- useEffect
- useRef 
- useId 

# React Router
npm i react-router-dom


# Mock Service Worker
https://github.com/valendres/playwright-msw/blob/main/packages/example/src/mocks/handlers/settings.ts

https://mswjs.io/docs/network-behavior/rest

# PWA Workbox 
https://developer.chrome.com/docs/workbox/modules/workbox-routing#router_logging

# PWA Update lifecycle
https://developer.chrome.com/docs/workbox/modules/workbox-window#important_service_worker_lifecycle_moments

## Use Hooks
https://github.com/streamich/react-use

https://www.reactuse.com/



# Use Fetch
https://use-http.com/#/

https://usehooks.com/usefetch

https://swr.vercel.app/

https://tanstack.com/query/latest/docs/framework/react/overview

# State management

https://jotai.org/

https://blog.openreplay.com/top-6-react-state-management-libraries-for-2022/


# Unit testing
https://testing-library.com/docs/user-event/convenience#click
+ jsdom
https://vitest.dev/guide/debugging.html#debugging
https://jestjs.io/



# Forms

npm install @hookform/resolvers react-hook-form zod 