import { countVowels, isPalindrome, treeToSentence, WordTree } from "../src/part2";

describe("Assignment 1 Part 2", () => {
    describe("countVowels", () => {
        it("counts letters", () => {
            expect(countVowels("aaabbbb")).toEqual(3);
        });
        it("counts letters", () => {
            expect(countVowels("AaaBbbb")).toEqual(3);
        });
        it("counts letters", () => {
            expect(countVowels("ABbbaab")).toEqual(3);
        });
        it("counts letters", () => {
            expect(countVowels("I am robot")).toEqual(4);
        });
        it("counts letters", () => {
            expect(countVowels("abcABCaabbcc d")).toEqual(4);
        });
    });

    describe("isPalindrome", () => {

        it("should return true for a simple palindrome", () => {
            expect(isPalindrome("racecar")).toBe(true);
        });

        it("should return true for a palindrome with mixed case", () => {
            expect(isPalindrome("RaceCar")).toBe(true);
        });

        it("should return true for a palindrome ignoring spaces and punctuation", () => {
            expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true);
        });

        it("should return false for a non-palindrome", () => {
            expect(isPalindrome("Not a palindrome")).toBe(false);
        });

        it("should return true for an empty string", () => {
            expect(isPalindrome("")).toBe(true);
        });

        it("should return true for a single-character string", () => {
            expect(isPalindrome("a")).toBe(true);
        });

        it("should handle numeric palindromes", () => {
            expect(isPalindrome("12321")).toBe(true);
        });

        it("should handle palindromes with special characters", () => {
            expect(isPalindrome("No lemon <=> No melon")).toBe(true);
        });

    });

    describe("treeToSentence", () => {
        it("Represents a tree as a sentence", () => {
            const t1: WordTree = {root:"hello", children:[{root: "world", children:[]}]}
            expect(treeToSentence(t1)).toBe("hello world");
        });

        it("Represents a tree as a sentence", () => {
            const t2: WordTree = {root:"hello", children:[{root: "there", children:[]}, {root:"!", children:[]}]}
            expect(treeToSentence(t2)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t3: WordTree = {root:"hello", children:[{root: "there", children:[{root:"!", children:[]}]}]}
            expect(treeToSentence(t3)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t4: WordTree = {root:"hello", children:[]}
            expect(treeToSentence(t4)).toBe("hello");
        });
        it("Represents a tree as a sentence", () => {
            const t5: WordTree = {root:"", children:[]}
            expect(treeToSentence(t5)).toBe("");
        });
    });
});

/* --- MY TESTS --- */

describe("My Additional Tests", () => {
    
    describe("countVowels - Edge Cases", () => {
        it("should return 0 for string with no vowels", () => {
            expect(countVowels("bcdfghjklmnpqrstvwxyz")).toEqual(0);
        });
        it("should count vowels even if they are mixed with numbers and symbols", () => {
            expect(countVowels("123!@# AEIOU")).toEqual(5);
        });
        it("should handle strings with only spaces", () => {
            expect(countVowels("     ")).toEqual(0);
        });
    });

    describe("isPalindrome - Complex Cases", () => {
        it("should handle long palindromes with lots of punctuation", () => {
            expect(isPalindrome("Eva, can I see bees in a cave?")).toBe(true);
        });
        it("should handle palindromes that are purely numeric but with spaces", () => {
            expect(isPalindrome("123 21")).toBe(true);
        });
        it("should return false for strings that are almost palindromes", () => {
            expect(isPalindrome("abab")).toBe(false);
        });
    });

    describe("treeToSentence - Complex Trees", () => {
        it("should handle a deep single-branch tree (vertical)", () => {
            const deepTree: WordTree = {
                root: "I",
                children: [{
                    root: "am",
                    children: [{
                        root: "deep",
                        children: []
                    }]
                }]
            };
            expect(treeToSentence(deepTree)).toBe("I am deep");
        });

        it("should handle a very wide tree (star shape)", () => {
            const wideTree: WordTree = {
                root: "Everything",
                children: [
                    { root: "is", children: [] },
                    { root: "connected", children: [] },
                    { root: "to", children: [] },
                    { root: "this", children: [] }
                ]
            };
            expect(treeToSentence(wideTree)).toBe("Everything is connected to this");
        });

        it("should ignore multiple empty nodes scattered in the tree", () => {
            const messyTree: WordTree = {
                root: "Start",
                children: [
                    { root: "", children: [{ root: "Middle", children: [] }] },
                    { root: "", children: [] },
                    { root: "End", children: [] }
                ]
            };
            expect(treeToSentence(messyTree)).toBe("Start Middle End");
        });
    });
});

/* --- END OF MY TESTS --- */