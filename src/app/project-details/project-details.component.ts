import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../_models/model';
import { ProjectsService } from '../_services/projects.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  backgroundImageUrl = 'assets/images/background.jpg';
  title: string | null = 'title';
  project: Project | undefined;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, router: ActivatedRoute, private projectService: ProjectsService, private http: HttpClient) {
    iconRegistry.addSvgIcon('sciences', sanitizer.bypassSecurityTrustResourceUrl("assets/images/logo.svg"));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl("assets/images/github.svg"));
    iconRegistry.addSvgIcon('tensorflow', sanitizer.bypassSecurityTrustResourceUrl("assets/images/tensorflow.svg"));
    iconRegistry.addSvgIcon('docker', sanitizer.bypassSecurityTrustResourceUrl("assets/images/docker.svg"));
    iconRegistry.addSvgIcon('pen', sanitizer.bypassSecurityTrustResourceUrl("assets/images/pen.svg"));
    iconRegistry.addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl("assets/images/angular.svg"));
    iconRegistry.addSvgIcon('model', sanitizer.bypassSecurityTrustResourceUrl("assets/images/model.svg"));
    iconRegistry.addSvgIcon('brain', sanitizer.bypassSecurityTrustResourceUrl("assets/images/brain.svg"));
    iconRegistry.addSvgIcon('typescript', sanitizer.bypassSecurityTrustResourceUrl("assets/images/typescript.svg"));
    iconRegistry.addSvgIcon('sql', sanitizer.bypassSecurityTrustResourceUrl("assets/images/sql.svg"));
    iconRegistry.addSvgIcon('flutter', sanitizer.bypassSecurityTrustResourceUrl("assets/images/flutter.svg"));

    this.title = router.snapshot.paramMap.get('projectId');
    this.projectService.getProjects().subscribe((response: any) => {
      response.projects.forEach((item: Project) => {
        if (item.id === this.title) {
          this.project = item;
        }
      })
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {

  }
}
