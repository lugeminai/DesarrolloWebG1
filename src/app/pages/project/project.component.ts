import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = [];

  showProject = "true";

  constructor(private readonly projectService: ProjectService, 
               
              private activateRoute: ActivatedRoute) { }

  getProjects(){
    this.projectService.getProjects().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(this.projects);
    })
  }

  getProjectById(id: number){
    this.projectService.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { id: number; }) => item.id == id);
      console.log(this.projects);
    })
  }

  

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.id){
        this.getProjectById(params.id);
        
        this.showProject = "false";
      }
      else {
        this.getProjects();
      }
    });
  }
}