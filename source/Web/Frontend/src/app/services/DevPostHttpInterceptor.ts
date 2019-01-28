import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Post } from "./posts.service";

@Injectable()
export class DevPostsHttpInterceptor implements HttpInterceptor {
    postList: Post[] = [
        { postname: "mock1", date: new Date(Date.now()), userId: 1234, interest: 'testing' },
        { postname: "mock2", date: new Date(new Date(Date.now()).setMonth(7)), userId: 5678, interest: 'testing' }
    ];

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.method != "GET" && req.url.indexOf("Posts") === -1) {
            return next.handle(req); // do nothing, not a Get Posts call
        } else {
            return next.handle(req).pipe(
                tap(response => {
                    if (response instanceof HttpResponse) {
                        const mockResponse = response.clone({
                            body: JSON.stringify(this.postList),
                            status: 200,
                            statusText: "mocked"
                        });
                        return mockResponse;
                    }
                    else{
                        return next.handle(req);
                    }
                })
            );
        }
    }
}
