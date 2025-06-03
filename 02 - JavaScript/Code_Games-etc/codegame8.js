/*Cria a função  que recebe uma string e retorna uma string, semelhante mas que subsitui alguns dos seus caráteres de modo a que se pareça linguagem Hacker.

Evita a utilização de *if*.

Letras a ser substituídas:

a ou A -> 4
e ou E -> 3
i ou I -> 1
o ou O -> 0
s ou S -> 5
*/
/* Create a function that receives a string and returns a string, similar but with some of its characters replaced so that it looks like Hacker language.

Avoid using *if*.

Letters to be replaced:

a or A -> 4
e or E -> 3
i or I -> 1
o or O -> 0
s or S -> 5
*/

//Pedro Farinha's Resolution:

let sentence = "I'm a Hacker, lol";

function converteHacker(string) {

    const map = {
        a: "4", A: "4",
        e: "3", E: "3",
        i: "1", I: "1",
        o: "0", O: "0",
        s: "5", S: "5"
    }
    //this can also be displayed like this: const map = {a:"4",A:"4",e:"3",E:"3",i:"1",I:"1",o:"0",O:"0",s:"5",S:"5"};

    return string.replace(/[aAeEiIoOsS]/g, letter => map[letter]);
}

console.log(converteHacker(sentence))//1'm 4 H4ck3r, l0l
