import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

	tasks: Task[];

  constructor() {
		this.tasks = [
			{title: "Write", description: "I have to write"},
			{title: "Create a website", description: "I have to create a website"}
		];
	}

	getTasks() {
		return this.tasks;
	}

	addTasks(task: Task) {
		this.tasks.push(task);
	}

}
