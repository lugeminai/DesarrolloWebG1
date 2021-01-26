import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './pages/contactus/contactus.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TeamComponent } from './pages/team/team.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';

const routes: Routes = [
    { path: 'apartment/:id', component: ApartmentComponent },
    { path: 'project/:id', component: ProjectComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'team', component: TeamComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}