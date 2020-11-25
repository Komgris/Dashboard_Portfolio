import { Component, OnInit } from '@angular/core';
import { OpenLibaryService } from 'src/app/services/open-libary.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  keyword:string='Percy Jackson';
  bookCount:number=0;
  mockReport:any;
  searchOption=[
    {key:'title',value:'Title'},
    {key:'author',value:'Author'}
  ];
  page = 1;
  rowSize = 100;
  selectedOption:string='title';
  constructor(
    private libaryService: OpenLibaryService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.onSearch();
  }
  
  setImage(ibo:string){
    return this.libaryService.getCover(ibo,'M');
  }

  async onSearch(){
    const data:any = await this.libaryService.search(this.keyword,this.selectedOption,this.page);
    console.log(data)
    this.bookCount = data.numFound;
    this.mockReport = data.docs;
  }
}
