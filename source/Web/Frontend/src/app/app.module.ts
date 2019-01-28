import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { AppCoreModule } from "./core/core.module";
import { InterestScrollViewerComponent } from './interest-scroll-viewer/interest-scroll-viewer.component';
import { LatestScrollViewerComponent } from './latest-scroll-viewer/latest-scroll-viewer.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DevPostsHttpInterceptor } from "./services/DevPostHttpInterceptor";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, InterestScrollViewerComponent, LatestScrollViewerComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        AppCoreModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: DevPostsHttpInterceptor}]
})
export class AppModule { }
