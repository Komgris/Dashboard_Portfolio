import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IMockDataInterface } from 'src/app/interfaces/mockdata.interface';
import { ExportExcelService } from 'src/app/services/export-excel.service';
import { JsonMockService } from 'src/app/services/json-mock.service';
import { SetReportNameComponent } from './set-report-name/set-report-name.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  mockReport:IMockDataInterface[] = [];
  reportName:string='';
  
  constructor(
    private jsonMockService : JsonMockService,
    private modalService: NgbModal,
    private exportService : ExportExcelService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getMockdata();
  }

  async getMockdata(){
    const data: any = await this.jsonMockService.getMockData();
    this.mockReport = data;
  }

  exportAsXLSX(){
    const modal: NgbModalRef = this.modalService.open(SetReportNameComponent);
    modal.result.then(
      (result) => {
        this.reportName = result;
        this.exportService.exportAsExcelFile(this.mockReport, result);
      }
    );
  }

  open() {

  }

}
