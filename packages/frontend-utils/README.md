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
