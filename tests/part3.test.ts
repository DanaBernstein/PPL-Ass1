import * as R from "../src/lib/result";
import * as F from "../src/part3";

describe("Assignment 1 - Part 3", () => {
    describe("findResult", () => {
        it("returns a Failure when no element was found", () => {
            const my_list: string[] = ["dog", "cat", "rat"]

            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isFailure);
        });
        it("returns a Failure when no element was found", () => {
            const my_list: string[] = ["dog", "cat", "rat"]

            expect(F.findResult(x => x[0] === "z", my_list)).toSatisfy(R.isFailure);
        });

        it("returns an Ok when an element was found", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isOk);
        });
        it("returns an Ok when an element was found", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x.length > 3, my_list)).toEqual(R.makeOk("raccoon"));
        });
        it("returns an Ok when an element was found", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x[0] === "s", my_list)).toEqual(R.makeOk("slug"));
        });
    });

    describe("returnSquaredIfFoundEven", () => {
        it("returns an Ok of the first even number squared in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 2, 3])).toEqual(R.makeOk(4));
        });
        it("returns an Ok of the first even number squared in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 4, 3])).toEqual(R.makeOk(16));
        });
        it("returns an Ok of the first even number squared in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([32, 64, 128])).toEqual(R.makeOk(1024));
        });

        it("return a Failure if no even numbers are in the array in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 3, 5])).toSatisfy(R.isFailure);
        });

        it("return a Failure if no even numbers are in the array in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([])).toSatisfy(R.isFailure);
        });

        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 2, 3])).toBe(4);
        });
        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 4, 3])).toBe(16);
        });
        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([32, 64, 128])).toBe(1024);
        });

        it("returns -1 if no even numbers are in the array in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 3, 5])).toBe(-1);
        });
        it("returns -1 if no even numbers are in the array in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([])).toBe(-1);
        });
    });
});
describe("Extra Tests for findResult", () => {
        it("returns the first element if it satisfies the predicate", () => {
            const list = [10, 20, 30];
            expect(F.findResult(x => x > 5, list)).toEqual(R.makeOk(10));
        });

        it("returns the last element if it is the only one satisfying the predicate", () => {
            const list = [1, 3, 5, 8];
            expect(F.findResult(x => x % 2 === 0, list)).toEqual(R.makeOk(8));
        });

        it("works with empty arrays by returning Failure", () => {
            expect(F.findResult(x => true, [])).toSatisfy(R.isFailure);
        });

        it("returns Failure if the array contains elements but none satisfy the predicate", () => {
            const list = [1, 2, 3];
            expect(F.findResult(x => x > 10, list)).toSatisfy(R.isFailure);
        });

        it("verifies the failure message is correct", () => {
            const result = F.findResult(x => x > 10, [1, 2, 3]);
            expect(result).toEqual(R.makeFailure("No element found."));
        });
    });

    describe("Extra Tests for returnSquaredIfFoundEven", () => {
        it("v2: returns Ok(0) if 0 is the first even number (0^2 is 0)", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 0, 3])).toEqual(R.makeOk(0));
        });

        it("v2: handles negative even numbers correctly (-2 squared is 4)", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, -2, 3])).toEqual(R.makeOk(4));
        });

        it("v3: returns 0 if the first even number is 0", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 0, 3])).toBe(0);
        });

        it("v3: handles large numbers correctly", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 100, 3])).toBe(10000);
        });

        it("v2/v3: ensures it only picks the FIRST even number", () => {
            const list = [1, 2, 4, 6];
            // Should pick 2 and square it to 4, NOT pick 4 or 6.
            expect(F.returnSquaredIfFoundEven_v2(list)).toEqual(R.makeOk(4));
            expect(F.returnSquaredIfFoundEven_v3(list)).toBe(4);
        });
    });