import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  lists : List[];
  tasks : Task[];

  selectedListId: any;

  constructor(private taskservice : TaskService , private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      if(params.listId){
        this.selectedListId = params.listId
        this.taskservice.getTasks(params.listId).subscribe((tasks: Task[])=>{
        this.tasks = tasks
      })
      }else{
        this.tasks = undefined
      }
    }
    )

    this.taskservice.getLists().subscribe((lists:List[])=>{
      this.lists = lists

    })
  }


  onTaskclick(task: Task){
    //task to completed

    this.taskservice.complete(task).subscribe(()=>{
      task.completed = !task.completed
      console.log("Completed Successfully")
    })
  }


  onDelete(){
    this.taskservice.deletList(this.selectedListId).subscribe((res:any)=>{
      this.router.navigate(['/lists'])
      console.log(res)
    })
  }


  onTaskDelete(id: string){
    this.taskservice.deletTask(this.selectedListId,id).subscribe((res:any)=>{
      this.tasks = this.tasks.filter(val => val._id !== id)
      console.log(res)
    })
  }
}
