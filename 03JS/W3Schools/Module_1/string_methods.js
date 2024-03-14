// String Length
    // let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let length = text1.length;
    // console.log(length);

// charAt()
    // let text2 = "HELLO WORLD";
    // let char1 = text2.charAt(0);
    // let char2 = text2.charCodeAt(0);
    // let letter1 = text2.at(2);
    // let letter2 = text2[2];
    // console.log(char1);
    // console.log(char2);
    // console.log(letter1);
    // console.log(letter2);
    // text[0] = "A";    // Gives no error, but does not work

// String slice()
    // let text = "Apple, Banana, Kiwi";
    // let part1 = text.slice(7, 13);
    // let part2 = text.slice(-12, -7);
    // console.log(part1);
    // console.log(part2);

// String substring()
    // let str = "Apple, Banana, Kiwi";
    // let part1 = str.substring(7, 13);
    // let part2 = str.substr(7, 6);
    // console.log(part1);
    // console.log(part2);

// String toUpperCase()
    // let text = "Hi";
    // console.log(text.toUpperCase());

// String toLowerCase()
    // console.log(text.toLowerCase());

// String concat()
    // let text1 = "Hello";
    // let text2 = "World";
    // console.log(text1.concat(" "+text2));

// String trim()
    // let text1 = "       Hello World!           ";
    // console.log(text1.trim());
    // let len1 = text1.trimStart().length;
    // let len2 = text1.trimEnd().length;
    // console.log(len1+" "+len2);


// String Padding
    // let text = "5";
    // let padded1 = text.padStart(4,"x");
    // let padded2 = text.padEnd(4,"0");
    // console.log(padded1);
    // console.log(padded2);

// Convert Number to String 
    // let num = 5;
    // let text = num.toString();
    // console.log(typeof(num));
    // console.log(typeof(text));

// String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

    // let text = "Hello world!";
    // let result = text.repeat(2);
    // console.log(result);


// Replacing String
    // let text = "Please visit Microsoft and Microsoft!";
    // let newText = text.replace("Microsoft", "W3Schools");
    // console.log(newText);

    // let text2 = text.replace(/MICROSOFT/i,"W3Schools");
    // let text3 = text.replace(/Microsoft/g,"W3Schools");
    // let text4 = text.replaceALL("Microsoft","W3Schools");
    // console.log(text2);
    // console.log(text3);

// String split()
    // text.split(",")    // Split on commas
    // text.split(" ")    // Split on spaces
    // text.split("|")    // Split on pipe