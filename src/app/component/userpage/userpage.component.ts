import { Component, OnInit } from '@angular/core';
import { Formats } from 'src/app/models/formats';
import { Result } from 'src/app/models/result';
import { Shelf } from 'src/app/models/shelf';
import { BookServices } from 'src/app/services/book.services';
import { ShelfServices } from 'src/app/services/shelf.service';
import { TokenClaim } from 'src/app/services/tokenclaim.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private shelfService:ShelfServices,private tokenClaim:TokenClaim,private bookService:BookServices) { }
  shelfs:number[]=[]
  formats:Formats[]=[]
  results:Result[]=[]
  imgcount:number = 0 
  ngOnInit(): void {
    this. getUserShelf()
    
    
  }
  getbooks(){
    for(var i=0;i<this.shelfs.length;i++){
      this.d(this.shelfs[i],i)
    }
    
  }
  d(id:number,ind:number){
    this.bookService.getbook(id).subscribe(response=>{

      this.results[ind]= response.results[0]
      this.formats[ind] = response.results[0].formats
    })
  }

  getUserShelf(){
    var userId = this.tokenClaim.getid();
    this.shelfService.getById(userId).subscribe(response=>{
      for(var i =0;i<response.data.length;i++){
        this.shelfs[i] = response.data[i].bookId
      }
      this.getbooks()
    })
  }

  checkEmpty():boolean{
    
    if(this.shelfs.length<1){
      
      return true
    }else{
      return false
    }

  }

}
