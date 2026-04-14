import * as R from "ramda";
import { Result, makeFailure, makeOk, bind, either } from "./lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

const creator:<T>(found:T|undefined)=>Result<T> = <T>(found:T|undefined) => found===undefined? makeFailure("No element found."):makeOk(found);
export const findResult = <T>(pred: (x: T) => boolean, a: T[]): Result<T> =>R.pipe((arr: T[])=>R.find(pred,arr), creator)(a)


/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}
const iseven = (x: number): boolean => x % 2 === 0;
export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => bind(findResult(iseven, a), (x:number): Result<number> => makeOk(x * x));
export const returnSquaredIfFoundEven_v3 = (a: number[]): number => either(findResult(iseven, a), (val:number)=>val*val, (msg:string)=>-1);
