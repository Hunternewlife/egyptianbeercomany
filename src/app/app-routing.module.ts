import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { PropinasComponent } from './components/propinas/propinas.component';


const routes : Routes = [
    {path: '', component: MainComponent},
    {path: 'bebidas', component: BebidasComponent},
    {path: 'cervezas', component: CervezasComponent},
    {path: 'propinas', component: PropinasComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}