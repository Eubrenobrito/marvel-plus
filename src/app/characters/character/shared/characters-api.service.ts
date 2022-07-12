import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

//(chave pública + chave privada+ timestamp) em um hash.
const PUBLIC_KEY = '0a624a82bfe59e4990c94cba03c8a7ff';
const HASH = 'd45256abd61b6e9df41a8ad6b336dbf6';
const URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;
//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=0a624a82bfe59e4990c94cba03c8a7ff&hash=d45256abd61b6e9df41a8ad6b336dbf6

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  constructor(private http: HttpClient) { }

  buscaTodosHerois(): Observable<any>{
    return this.http.get<any>(URL_API).pipe(map((data: any) => data.data.results))
  }
}
//erro 401 ocorre quando um parâmetro ts, hash e apikey é enviado, mas o hash não é válido
// de acordo com a regra de geração de hash. Gerei um novo hash e não ocorreu mais o problema.


//fazer interface
