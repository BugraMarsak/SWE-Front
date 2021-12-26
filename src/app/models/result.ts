import { Authors } from "./authors";
import { Formats } from "./formats";

export interface Result{
    id:number
    title:string
    authors:Authors[]
    translators:string[]
    subject:string[];
    bookshelves:string[];
    languages:string[];
    copyright:boolean;
    media_type:string;
    formats:Formats
    
  }