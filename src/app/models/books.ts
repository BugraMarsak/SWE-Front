import { Result } from "./result";

export interface Books{
    "count": number;
    "next": string;
    "previous": string;
    "results":Result[]
  }
