export type Result<T, E> = ResultOk<T> | ResultErr<E>;

export const Result = {
    ok: <T, E>(value: T): Result<T, E> => new ResultOk(value),
    err: <T, E>(err: E): Result<T, E> => new ResultErr(err),
};

export class ResultOk<T> {
    public readonly ok: true = true;
    public readonly value: T;
    constructor(value: T) {
        this.value = value;
    }
}

export class ResultErr<E> {
    public readonly ok: false = false;
    public readonly err: E;
    constructor(err: E) {
        this.err = err;
    }
}
