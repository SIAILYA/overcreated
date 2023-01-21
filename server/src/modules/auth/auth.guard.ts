import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    HttpException,
    HttpStatus,
    Inject,
    Injectable
} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(@Inject(AuthService) private readonly authService: AuthService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const token = context.switchToHttp().getRequest().headers?.authorization

        if (!token) {
            throw new HttpException('No token provided', HttpStatus.FORBIDDEN);
        }

        return new Promise((resolve, reject) => {
            this.authService.verifyToken(token)
                .then(() => resolve(true))
                .catch((e) => {
                    reject(new ForbiddenException(e.message));
                });
        })
    }
}
