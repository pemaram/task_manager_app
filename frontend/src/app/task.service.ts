import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webrequestservice : WebrequestService) { }

  getLists(){
    return this.webrequestservice.get('lists')
  }

  createList(title : string){
     return this.webrequestservice.post('lists',{title})
  }

  deletList(id : string){
    return this.webrequestservice.delete(`lists/${id}`)
  }

  updateList(id : string , title: string){
     return this.webrequestservice.patch(`lists/${id}`,{ title })
  }

  getTasks(listId : string){
    return this.webrequestservice.get(`lists/${listId}/tasks`)
  }


   createTask(title : string , listId : string){
     return this.webrequestservice.post(`lists/${listId}/tasks`,{title})
  }


   deletTask(id : string , taskId : string){
    return this.webrequestservice.delete(`lists/${id}/tasks/${taskId}`)
  }

    updateTask(taskId : string , listId : string , title: string){
     return this.webrequestservice.patch(`lists/${listId}/tasks/${taskId}`,{ title })
  }


  complete(task : Task){
    return this.webrequestservice.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed : !task.completed
    })
  }



}
