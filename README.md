# duckdb-wasm-issues

When I attempt to bundle duckdb-wasm, I get the following error:

```
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
apache-arrow (imported by node_modules/@duckdb/duckdb-wasm/dist/duckdb-esm.js)
(!) Missing global variable name
Use output.globals to specify browser global variable names corresponding to external modules
apache-arrow (guessing 'apacheArrow')
```

And on an html page that loads the bundle, I get:

```
Uncaught ReferenceError: apacheArrow is not defined
    <anonymous> http://localhost:5000/poc.js:25
```

Steps to reproduce:

1. run `npm install`
2. run `npm run dev` and go to `http://localhost:5000`
3. observe the browser console and terminal