import { HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { CSRFInterceptor } from './csrf.interceptor';
import { TransformResponseInterceptor } from './transform-response.interceptor';
import { LogHttpInterceptor } from './log-http.interceptor';
import { EnsureSSLInterceptor } from './ensure-ssl.interceptor';
import { BusyInterceptor } from './busy.interceptor';
import { LogHeadersInterceptor } from './log-headers.interceptor';
import { ReadOnlyInterceptor } from './read-only.interceptor';

export const httpInterceptorProviders = [
  // Log Http: Should be first-ish so it can log the Http call happening in and out (last).
  { provide: HTTP_INTERCEPTORS, useClass: LogHttpInterceptor, multi: true },
  // ReadOnly: Do this before we add headers, get busy, or make the call.
  { provide: HTTP_INTERCEPTORS, useClass: ReadOnlyInterceptor, multi: true },
  // SSL, Auth, CSRF:Now that it has passed the readonly test, we want to stuff headers and proceed.
  { provide: HTTP_INTERCEPTORS, useClass: EnsureSSLInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CSRFInterceptor, multi: true },
  // Log headers: Must come after the headers are stuffed.
  { provide: HTTP_INTERCEPTORS, useClass: LogHeadersInterceptor, multi: true },
  // Busy: Should be almost last on request, so it can turn and off when it comes out.
  { provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TransformResponseInterceptor, multi: true },
];


/**
 * https://angular.io/guide/http#http-interceptors
 *
 * Why you care?
 * Have you ever needed to add headers to all or a subset of http requests? Transform the response? Log specific requests?
 * Without interception, developers would have to implement these tasks explicitly for each HttpClient method call.
 *
 * What is an interceptor?
 * HTTP Interception is a major feature of @angular/common/http.
 * With interception, you declare interceptors that inspect and transform HTTP requests from your application to the server.
 * The same interceptors may also inspect and transform the server's responses on their way back to the application.
 * Multiple interceptors form a forward-and-backward chain of request/response handlers.
 * Interceptors can perform a variety of implicit tasks, from authentication to logging, in a routine,
 * standard way, for every HTTP request/response.
 *
 * Providing Interceptors
 * Because interceptors are (optional) dependencies of the HttpClient service, you must provide them in the same injector
 * (or a parent of the injector) that provides HttpClient. Interceptors provided after DI creates the HttpClient are ignored.
 * Use a barrel and export an array of the interceptors.
 *
 * Modifying Requests
 *  Although interceptors are capable of mutating requests and responses, the HttpRequest and HttpResponse instance
 * properties are readonly, rendering them largely immutable.
 *  The request is immutable ... you must clone it.
 * Most interceptors transform the outgoing request before passing it to the next interceptor in the chain,
 * by calling next.handle(transformedReq). An interceptor may transform the response event stream as well,
 * by applying additional RxJS operators on the stream returned by next.handle().
 *
 * Modifing Responses
 * After you return stream via next.handle(), you can pipe the stream's response.
 * Use RxJS operators to transform or do what you will to it.
 * The response is immutable ... you must clone it.
 *
 * What is multi true?
 * The multi: true option is a required setting that tells Angular that HTTP_INTERCEPTORS is a token
 * for a multiprovider that injects an array of values, rather than a single value.
 *
 * Order is important
 * Angular applies interceptors in the order that you provide them. If you provide interceptors A,
 * then B, then C, requests will flow in A->B->C and responses will flow out C->B->A.



 */
