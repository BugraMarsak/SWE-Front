import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authors } from 'src/app/models/authors';
import { Books } from 'src/app/models/books';
import { Result } from 'src/app/models/result';
import { Shelf } from 'src/app/models/shelf';
import { AuthService } from 'src/app/services/auth.service';
import { BookServices } from 'src/app/services/book.services';
import { ShelfServices } from 'src/app/services/shelf.service';
import { TokenClaim } from 'src/app/services/tokenclaim.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  books:Books
  count:number;
  next:string
  prev:string
  results:Result[]
  imgcount:number = 0 
  namecount:number = 0 
  filterText:string ="";
  addShelfForm:FormGroup;
  bcheck:boolean
  constructor(private bookService:BookServices,private formBuilder:FormBuilder,private shelfService:ShelfServices,private tokenclaim:TokenClaim) { }

  ngOnInit(): void {
    this.getAll()
    
  }

  getBookId(bookId:number){
    
    this.addShelf(bookId)

  }
  addShelf(_bookId:number){
    var _userId = this.tokenclaim.getid()

    
      this.addShelfForm = this.formBuilder.group({
        userId:[_userId,Validators.required],
        bookId:[_bookId,Validators.required]
      })

      if(this.addShelfForm.valid){
        let addShelfModel=Object.assign({},this.addShelfForm.value);
        this.shelfService.add(addShelfModel).subscribe(response=>{
          
        }); 
      }
    
    
  }


  getAll(){
    this.bookService.getAll().subscribe(response=>{
      this.results = response.results
      this.next = response.next
      this.prev = response.previous
      this.count = response.count
    })
  }

  getphoto(){
    var result:string = this.results[this.imgcount].formats['image/jpeg']
    this.imgcount +=1
    return result
  }
  getname(){
    var result:string = "" 
    result +=this.results[this.namecount].authors[0].name
    this.namecount +=1
    return result
  }

  getnext(){
    if(this.next == null)
    {
      return
    }
    var tempnext:string = this.next
    this.results = []
    this.next = ""
    this.prev = ""
    this.imgcount = 0
    this.namecount = 0
    this.bookService.gonext(tempnext).subscribe(response=>{
      this.results = response.results
      this.next = response.next
      this.prev = response.previous
      this.count = response.count
    })
  }
  getprev(){
    if(this.prev == null)
    {
      return
    }
    var tempprev:string = this.prev
    this.results = []
    this.next = ""
    this.prev = ""
    this.imgcount = 0
    this.namecount = 0
    this.bookService.gonext(tempprev).subscribe(response=>{
      this.results = response.results
      this.next = response.next
      this.prev = response.previous
      this.count = response.count
    })
  }

  search(){
    var string = this.filterText;
    string = string.replace(/ /g,"%20");
    this.bookService.search(string).subscribe(response=>{
      this.results = response.results
      this.next = response.next
      this.prev = response.previous
      this.count = response.count
      this.imgcount = 0
      this.namecount = 0
    })
  }

}
