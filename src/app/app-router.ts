import { PostListComponent } from './post/post-list/post-list.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroModule } from './hero/hero.module';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroDashboardComponent } from './hero/hero-dashboard/hero-dashboard.component';


export const MainRoute: Routes = [
    { path: '', redirectTo: 'hero-list', pathMatch: 'full' },
    { path: 'hero-list', component: HeroListComponent },
    { path: 'hero-detail/:id', component: HeroDetailComponent },
    { path: 'hero-dashboard', component: HeroDashboardComponent },
    { path: 'post-list', component: PostListComponent },
];

export const MainRouter: ModuleWithProviders = RouterModule.forRoot(MainRoute);