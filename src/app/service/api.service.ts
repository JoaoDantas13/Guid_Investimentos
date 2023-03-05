import { Chart } from '../model/chart.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Caso API estivesse sem erro de Cors:
  //private readonly API: string = 'https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA';

  private readonly API: string = 'http://localhost:3000/chart';


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  //Get de todos os dados da API
  getDados(): Observable<Chart[]> {
    return this.http.get<Chart[]>(this.API).pipe(
      map(retorno => retorno),
      catchError(error => this.displayError(error))
    );
  }


  displayError(e: any): Observable<any> {
    this.displayMenssage('Ops!', 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY;
  }

  displayMenssage(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo)
  }

}
