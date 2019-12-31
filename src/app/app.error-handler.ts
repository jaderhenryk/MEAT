import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injector, Injectable, NgZone } from '@angular/core';
import { NotificationService } from './shared/messages/notification.service';
import { LoginService } from './security/login/login.service';
import 'rxjs';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private notificationService: NotificationService, private injector: Injector, private zone: NgZone) {
        super();
    }

    handleError(error: HttpErrorResponse | any) {
        if (error instanceof HttpErrorResponse) {
            const message = error.error.message;
            this.zone.run(() => {
                switch (error.status) {
                    case 401:
                        this.injector.get(LoginService).handleLogin();
                        break;
                    case 403:
                        this.notificationService.notify(message || 'Não autorizado!');
                        break;
                    case 404:
                        this.notificationService.notify(message || 'Recurso não encontrado!');
                        break;
                }
            });
        }
        super.handleError(error);
    }
}

