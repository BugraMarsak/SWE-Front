import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private shelfService:ShelfServices,private formBuilder:FormBuilder,private tokenClaim:TokenClaim,private bookService:BookServices,private tokenclaim:TokenClaim) { }
  shelfs:number[]=[]
  shelfId:number[]=[]
  formats:Formats[]=[]
  results:Result[]=[]
  imgcount:number = 0 
  removeShelfForm:FormGroup;
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
        this.shelfId[i] = response.data[i].shelfId
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


  delete(_bookId:number){
    var _userId = this.tokenclaim.getid()

    var _shelfId=(this.check(_bookId))
    
    this.removeShelfForm = this.formBuilder.group({
      shelfId:[_shelfId,Validators.required],
      userId:[_userId,Validators.required],
      bookId:[_bookId,Validators.required]
      })
      console.log(this.removeShelfForm)
      if(this.removeShelfForm.valid){
        let removeShelfModel=Object.assign({},this.removeShelfForm.value);
        this.shelfService.delete(removeShelfModel).subscribe(response=>{
          
        }); 
        window.location.reload()
      }
  }

  check(bookid:number){
    for(var i=0;i<this.shelfs.length;i++){
      if(this.shelfs[i]==bookid){
        return this.shelfId[i]
      }
    }
    return 0
  }

}
