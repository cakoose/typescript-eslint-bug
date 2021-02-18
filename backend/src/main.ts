import {Result} from 'common/result';

export function f(result: Result<string, string>): void {
    if (result.ok) {
        console.log('ok', result.value);
    } else {
        console.log('err', result.err);
    }
}
