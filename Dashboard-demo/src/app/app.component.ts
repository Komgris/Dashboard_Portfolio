import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
    private router: Router
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
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  select(model: any) {
    this.router.navigate([model.url]);
  }

}