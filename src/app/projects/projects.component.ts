import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from '../_models/model';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private projectService: ProjectsService) {
    iconRegistry.addSvgIcon('cell', sanitizer.bypassSecurityTrustResourceUrl("assets/images/cells.svg"));
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((response: any) => {
      this.projects = response.projects;
    }, (error) => {
      console.log(error);
    });
  }
}
