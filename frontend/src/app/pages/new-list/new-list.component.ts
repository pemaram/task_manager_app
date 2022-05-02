import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(private taskservice : TaskService , private router : Router) { }

  ngOnInit(): void {
  }

  createList(title : string){
      this.taskservice.createList(title).subscribe((list : List)=>{
      console.log(list)

      //navigate to /lists/response/response.id
        this.router.navigate(['lists',list._id])
    })
  }
}
