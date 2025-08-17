# lifecyles-compat

Compatibility layer for single-spa applications that use old lifecyle methods.

## Installation

```sh
npm i -S @single-spa/lifecycles-compat

pnpm i -S @single-spa/lifecycles-compat
```

## Usage

```js
import singleSpaReact from "single-spa-react";
import singleSpaLifeyclesCompat from "@single-spa/lifecycles-compat";

// Old versions of single-spa framework adapters used bootstrap lifecycle rather than init
const lifecycles = singleSpaReact({});

export const { init, mount, unmount, update } =
  singleSpaLifeyclesCompat(lifecycles);
```
