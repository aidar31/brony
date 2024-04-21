import { DEBUG } from "../config.js";
import { APP_ERROR_MESSAGE, HttpStatusCode } from "../constants/index.js";
import { HttpException } from "../exceptions/index.js";

export const notFound = (req, res, next) => {
    let error = null;

    if (DEBUG === true) {
        error = new HttpException(HttpStatusCode.NOT_FOUND, "Страница не найдена: "); // Обновляем значение error
    } else {
        error = "Страница не найдена.";
    }

    next(error);
};


export const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500; // Если нет статуса ошибки, устанавливаем по умолчанию 500
    const message = status === 500 ? APP_ERROR_MESSAGE.serverError : err.message;
    const errors = err.error;
    res.status(status).send({ status, message, error: errors });
};
