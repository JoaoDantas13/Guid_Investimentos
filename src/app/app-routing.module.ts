import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { GraficoComponent } from './grafico/grafico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grafico', component: GraficoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
