import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formats } from 'src/app/models/formats';
import { Result } from 'src/app/models/result';
import { BookServices } from 'src/app/services/book.services';
import { ShelfServices } from 'src/app/services/shelf.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-bookread',
  templateUrl: './bookread.component.html',
  styleUrls: ['./bookread.component.css']
})
export class BookreadComponent implements OnInit {

  constructor(private bookService:BookServices,private httpClient: HttpClient,private shelfServices:ShelfServices,private activatedRoute:ActivatedRoute,private sanitizer:DomSanitizer) { }
  result:Result
  format:Formats
  bookid:number
  x:string = "<hr>"
  test:string ="https://www.gutenberg.org/files/11/11-h/11-h.htm"
  ngOnInit(): void {
   this.getId()
    
  }

  getUrl(post:string)
{
  return this.sanitizer.bypassSecurityTrustResourceUrl(post);
}

  getId(){
    this.activatedRoute.params.subscribe(params =>{
      this.getbook(params["bookid"]);
    })
  }

  t(){
    return this.test
  }

  getbook(id:number){
    // 
    this.test="https://www.gutenberg.org/files/"+id+"/"+id+"-h/"+id+"-h.htm"


  }

  // getread(url:string) {
  //   var string = url;
  //   var ttt="https://www.gutenberg.org/files/11/11-h/11-h.htm"
  //   for(var i = 0;i<500;i++){
  //     string = string.replace(":","%3A");
  //     string = string.replace("/","%2F");
  //   }

  //   this.shelfServices.read(ttt).subscribe(response=>{
      
  //     this.test =response
  //   })
    
  // }

}
