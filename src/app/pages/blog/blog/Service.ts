import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiserviceService {
    constructor(private _http:HttpClient) { }
    getData(item) {
        return this._http.get('https://aserseguridad.co/php/blog.php?blog=' + item)
    }
}