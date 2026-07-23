export type Verdict="allow"|"deny"|"review";export interface SandboxConfig{blocklist?:RegExp[];allowlist?:RegExp[];maxCodeLength?:number;}
export interface SandboxResult{verdict:Verdict;violations:{pattern:string;line:number;match:string}[];reason:string;}
