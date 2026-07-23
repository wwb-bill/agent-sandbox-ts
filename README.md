# agent-sandbox-ts

Code validation sandbox for TypeScript agents — pattern-based API blocking, no Docker.

```typescript
import { validateCode } from "agent-sandbox-ts";
const result = validateCode("eval('bad')");
assert result.verdict === "deny";
```

MIT
