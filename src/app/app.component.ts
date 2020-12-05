import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active = 'top';
  menuitems = [
    { name: "Dashboard", id: "dashboard", url: "/dashboard", isActive: false },
    { name: "Library", id: "library", url: "/library", isActive: false },
    { name: "Report", id: "report", url: "/report", isActive: false },
    { name: "Calendar", id: "calendar", url: "/calendar", isActive: false }  
  ];
  constructor(
    private router: Router,
    private modalService: NgbModal
  ) {
    router.events.forEach((event) => {

        if (event instanceof NavigationEnd) {
            for (let item of this.menuitems) {
                if (event.url.includes(item.url)) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            }
        }
    });
}

ngbModalOptions: NgbModalOptions = {
  size:'lg'
};

  ngOnInit(): void {
    let firstTime = localStorage.getItem('firstTime');
    if(!firstTime){
      localStorage.setItem('firstTime','true');
      this.modalService.open(AboutComponent,this.ngbModalOptions);
    }
  }
  select(model: any) {
    this.router.navigate([model.url]);
  }

  aboutClick(){
    this.modalService.open(AboutComponent,this.ngbModalOptions);
  }

}