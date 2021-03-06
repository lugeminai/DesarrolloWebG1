import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component'
import { GestcursosComponent } from './pages/admin/gestcursos/gestcursos.component';
import { IngcursoComponent } from './pages/admin/ingcurso/ingcurso.component';

const routes: Routes = [
    
    { path: 'curso/:id', component: CursoComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'matricula', component: MatriculaComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'admin/gestcursos', component: GestcursosComponent},
    { path: 'admin/ingcurso', component: IngcursoComponent}    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}