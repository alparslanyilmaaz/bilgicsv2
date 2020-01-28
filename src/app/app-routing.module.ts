import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'content/:title', component:ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
