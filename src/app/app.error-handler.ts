import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import 'rxjs';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        if (error instanceof HttpErrorResponse) {
            errorMessage = `Erro ${error.status} ao obter a url ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }
        return errorMessage;
    }
}

