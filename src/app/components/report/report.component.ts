import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  mockReport = [
    {name:'Harry Potter',author:'J.K. Rowling',genres:'Fiction',prices: 250},
    {name:'The Load of the Rings',author:'J.R.R.Tolkien',genres:'Fiction',prices: 500},
    {name:'Percy Jackson & the Olympians',author:'Rick Riordan',genres:'Fiction',prices: 200},
    {name:'The Chronicles of Narnia',author:'C. S. Lewis',genres:'Fiction',prices:0},
    {name:'',author:'',genres:'',prices:0},
    {name:'',author:'',genres:'',prices:0},
    {name:'',author:'',genres:'',prices:0},
    {name:'',author:'',genres:'',prices:0},
    {name:'',author:'',genres:'',prices:0},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
