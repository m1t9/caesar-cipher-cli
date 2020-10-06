# Caesar cipher CLI tool

Implementation of [Task 1. "Caesar cipher CLI tool"](https://github.com/KostyaKulak/CaesarCipher/blob/master/README.md#task-1-caesar-cipher-cli-tool), that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

**Instruction:**

- Download source code (git clone or download ZIP)
- Open command promt and change current directory to downloaded source code folder (/caesar-cipher-cli)
- run command ```npm install```
- to start Caesar cipher CLI tool type ```node my_caesar_cli``` with options

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift (**required**)
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode (**required**)

Negative value can be added via equal sign (example: --shift=-7). If the input file option is missed - input source text in command line. If the output file option is missed - output text will be shown on the command line.

**Usage example:**

```bash
$ node caesar -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node caesar --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node caesar --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
