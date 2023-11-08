import { Injectable } from '@angular/core'
import { RegisterRequestInterface } from 'src/app/auth/types/register-request.interface'
import { map, Observable } from 'rxjs'
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment'
import { AuthResponseInterface } from 'src/app/auth/types/auth-response.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
