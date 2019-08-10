import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FeedComponent } from './feed/feed.component';
import { PopularComponent } from './popular/popular.component';


const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'feed', component: FeedComponent },
            { path: 'popular', component: PopularComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
