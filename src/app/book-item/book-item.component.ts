import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  constructor(private service:BookService) { }

  ngOnInit() {
    this.service.book= {
      id:0,
      title:null,
      author:null,
      numberOfPages:null,
      publishedDat:null
    }
  }
  submit(form:NgForm)
  {
    this.service.postBook().subscribe(res=>
      {
        this.service.getAllBooks(); 
      },
      err=> {
        console.log(err)
      })
  }

}
