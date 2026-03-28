import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
const vowelsOnly:(s: string[])=>string[]= R.filter((val:string):boolean=>R.includes(val,vowels));
export const countVowels: (s: string) => number =R.pipe(R.toLower,stringToArray,vowelsOnly,R.length);

/* Question 2.2 */
const clean: (s:string)=> string= R.pipe(R.toLower, R.replace(/[^a-z0-9]/g, ''));
const reversea:(s: string)=>string=R.pipe(stringToArray, R.reverse,R.join(""));
const reversestr:(s:string)=> string=R.pipe(clean,reversea);

export const isPalindrome = (text: string): boolean => R.equals(clean(text), reversestr(text));

  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}


const preparearray:(t:WordTree)=> string[]=(t: WordTree): string[] => R.prepend(t.root, R.chain(preparearray, t.children))
export const treeToSentence = (t: WordTree): string => R.pipe(preparearray,R.filter((s: string) => s.length > 0), R.join(" "))(t);
