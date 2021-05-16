import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { DepartmentListComponent } from '../department-list/department-list.component';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    You selected department with id = {{departmentId}}</h3>
  <p>
    <button (click)="showOverview()">Overview </button>
    <button (click)="contact()"> Contact</button>
  </p>

    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous  </button>
    <button (click)="goNext()">Next</button>
  </p>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

   public departmentId:any;
  constructor(private route: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe(params =>{
       this.departmentId=params.get('id');
     });
  }

    goPrevious(){
      let previousId = this.departmentId - 1;
      this.router.navigate(['/departments', previousId]);
      
    }
    
    goNext()
        {
        let nextId = parseInt(this.departmentId) + 1;
        this.departmentId=nextId;
        this.router.navigate(['/departments',nextId]);

        }

    gotoDepartments(){
      let selectedId = this.departmentId ? this.departmentId : null;
      // this.router.navigate(['/departments',{id:selectedId}]);
        this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
    }

    showOverview(){
      this.router.navigate(['overview'],{relativeTo:this.route});
    }

    contact(){
      this.router.navigate(['contact'],{relativeTo:this.route});
    }
}
