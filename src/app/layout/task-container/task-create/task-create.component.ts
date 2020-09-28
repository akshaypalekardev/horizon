import { TaskServiceService } from './../task-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  selectedListId: number;
  constructor(public taskService: TaskServiceService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedListId = Number(params.get('id'));
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.taskService.addTask(form.value.taskInputField, this.selectedListId);
    form.resetForm();
  }

}
