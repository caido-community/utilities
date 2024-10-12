<div align="center">
  <img width="1000" alt="image" src="https://github.com/user-attachments/assets/2d437a6b-d162-4a21-b6d0-dcccd36c0e7f">

  <br />
  <br />
  <a href="https://github.com/caido-community" target="_blank">Github</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://developer.caido.io/" target="_blank">Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://links.caido.io/www-discord" target="_blank">Discord</a>
  <br />
  <hr />
</div>

# 🔥 Frontend Utils

This package supplements the [Official SDK](https://www.npmjs.com/package/@caido/sdk-frontend) with Community Contributions. The goals are:

- Experiment with new Frontend APIs
- Work-arounds for current bugs / limitations in the SDK
- Share useful utilities

This package is not meant to contain UI elements, only pure Typescript.

```typescript
import { utils } from "@caido-community/frontend-utils";

export function init(sdk) {
  const { getHttpqlBar } = utils(sdk);
  // My code
}
```

## 💚 Community

Come join the Caido community either on [Github](https://github.com/caido-community) or [Discord](https://links.caido.io/www-discord).
