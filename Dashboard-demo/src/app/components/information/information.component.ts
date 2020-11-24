import { Component, OnInit } from '@angular/core';
import { OpenLibaryService } from 'src/app/services/open-libary.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(
    private libaryService: OpenLibaryService
  ) { }

  async ngOnInit(): Promise<void> {
    console.log(await this.libaryService.search('percy jackson'))
  }

}
