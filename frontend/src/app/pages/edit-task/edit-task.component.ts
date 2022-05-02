import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private route : ActivatedRoute , private taskservice : TaskService, private router : Router) { }

   taskId : string;
   listId : string;

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.taskId = params.taskId
      this.listId = params.listId
    }
    )
  }

  updateTask(title : string){
    this.taskservice.updateTask(this.taskId,this.listId, title).subscribe(()=>{
    this.router.navigate([`/lists` , this.listId])
    })
  }

}
