import { Injectable } from '@angular/core'
import { RegisterRequestInterface } from 'src/app/auth/types/register-request.interface'
import { map, Observable } from 'rxjs'
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment'
import { AuthResponseInterface } from 'src/app/auth/types/auth-response.interface'
import { LoginRequestInterface } from 'src/app/auth/types/login-request.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'

    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }
}
