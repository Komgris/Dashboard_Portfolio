import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare let alertify: any;
@Component({
  selector: 'app-set-report-name',
  templateUrl: './set-report-name.component.html',
  styleUrls: ['./set-report-name.component.css']
})
export class SetReportNameComponent implements OnInit {

  fileName:string=''
  constructor(
    private readonly activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  confirm(){
    if(this.fileName !== ''){
      this.activeModal.close(this.fileName)
    }
    else{
      alertify.error('Please define excel filename')
    }
  }

}
