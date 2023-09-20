# Technologies Stack:
- Styled Components;
- React ecosystem: React Query, React Hook Form, React Router, Context API;
- other: React Icons, React Hot Toast, Rechart, date-fns;
- backend - supabase.

# Business requirements:

- hotel with 8 wooden cabins;
- custom build application to manage everithing about hotel: bookings, cabins and guests;
- internal app that used inside hotel to check in guests as they arrive;
- API to store data;
- customer: facing website to book stays
- dark/light mode

# Pages 
 /bookings <br>
/cabins  <br>
/dashboard  <br>
/checkin/:bookingId  <br>
/settings (breakfast price, min/max nights/bookings, max guests)  <br>
/users   <br>
/login  <br>


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
