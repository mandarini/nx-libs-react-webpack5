# Bundlers and compilers

## Install dependencies

```bash
yarn
```

## Summary

`@storybook/react-webpack5` does not work with libraries. This is a regression, it used to work in Storybook 6.5 when `builder: 'webpack5'` was used.

## For apps

### SWC

All works as expected. React app using `webpack` and `swc` as compiler, builds Storybook as expected.

```bash
npx nx build-storybook react-app-wp-swc
```

### Babel

All works as expected. React app using `webpack` and `babel` as compiler, builds Storybook as expected.

```bash
npx nx build-storybook react-app-wp-babel
```

## For libraries

### Non-buildable library

Gets error when serving and building with `@storybook/react-webpack5`.

To reproduce:

```bash
npx nx build-storybook react-nb
```

```bash
 >  NX   Module not found: Error: Can't resolve 'core-js/modules/es.object.assign.js' in '/Users/katerina/Projects/nrwl/test_nx_workspaces/path-imports/libs/react-babel/src/lib'
```

Works when I use `@storybook/react-vite` instead of `@storybook/react-webpack5`.

### Rollup + Babel + `@storybook/react-webpack5`

Library building with `rollup` and `babel` as compiler gets error when serving and building with `@storybook/react-webpack5`.

To reproduce:

```bash
npx nx build-storybook react-babel
```

```bash
 >  NX   Module not found: Error: Can't resolve 'core-js/modules/es.object.assign.js' in '/Users/katerina/Projects/nrwl/test_nx_workspaces/path-imports/libs/react-babel/src/lib'
```

Works when I use `@storybook/react-vite` instead of `@storybook/react-webpack5`.

### Rollup + SWC + `@storybook/react-webpack5`

Library building with `rollup` and `swc` as compiler gets error when serving and building with `@storybook/react-webpack5`.

To reproduce:

```bash
npx nx build-storybook react-swc
```

```bash
>  NX   Module not found: Error: Can't resolve 'core-js/modules/es.object.assign.js'in '/Users/katerina/Projects/nrwl/test_nx_workspaces/path-imports/libs/react-swc/srclib'
```

Works when I use `@storybook/react-vite` instead of `@storybook/react-webpack5`.
