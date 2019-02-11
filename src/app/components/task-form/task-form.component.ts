import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService: TaskService) {
		
	}

  ngOnInit() {
  }

	addTask(title: HTMLInputElement, description: HTMLInputElement) {

		this.taskService.addTasks({
			title: title.value,
			description: description.value
		});

		return false;
	}

}
