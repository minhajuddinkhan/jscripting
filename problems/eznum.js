/**
 *
 * While studying representation of numbers in various bases, Chef discovered an interesting properties of some positive numbers,
 * which Chef believed are somewhat easy to memorize.
 * Chef called such positive numbers easy numbers.

 These numbers had an interesting property: Let the base Chef is currently studying be b.
 Represent the number in base b (without leading zeros). For each prefix of length k (from 1 to number of digits in number in the base),
 the number formed by considering the digits of the prefix in base b is divisible by k.

 For example, let base Chef is studying be 2.

 1 is an easy number as its prefix of length 1 (i.e. 1) is divisible by 1.


 2 is also an easy number, as its prefix of length 1 (i.e. 1) is divisible by 1 and the prefix of length 2
 (i.e. 2, represented as 10 in base 2) is also divisible by 2.


 3 is not an easy number, as its prefix of length 2 (i.e. 3, represented as 11 in base 2) is not divisible by 2.


 Now Chef finds these numbers easy and thinks that following question related to easy numbers will be easy for you too.
 He asks you to find the number of easy numbers represented in base b and consisting of exactly d digits.
 As the answer could be quite large, output it modulo 109 + 7.*/



console.log((+3).toString(2));