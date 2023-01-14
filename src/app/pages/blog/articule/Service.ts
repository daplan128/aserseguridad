import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiserviceService {
    constructor(private _http:HttpClient) { }
    getData(limit, offset) {
        return this._http.get('https://aserseguridad.co/php/get_articules.php?limit=' + limit + '&offset=' + offset + '&web=2')
    }
}