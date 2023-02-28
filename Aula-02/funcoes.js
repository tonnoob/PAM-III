/* ctrl+; comenta a linha e descomenta */
/* shift + alt + a para comentarios  */
/* ctrl + alt + N  para executar o código */

/* ------------------------------------------------------------------------ */
/* assim é uma declaração simples de fução */
// function mensagem () {
    // return "Função 01";
// }
/* O ";" é opcional, tendo que manter um padrão caso use*/

// console.log(mensagem())
/* ------------------------------------------------------------------------ */
function mensagem () {
    let msg = 'Função 02';
    return msg
}
/* O ";" é opcional, tendo que manter um padrão caso use*/

console.log(mensagem())
/* ----------------------------------------------------------------------- */
const nome = ()=> {
    return 'Função 03'
}

console.log(nome())
/* ---------------------------------------------------------------------- */
function umaMensagem (parametro) {
    return console.log("A sua mensagem é: ", parametro)
// Para a concatenação utiliza-se ","
}

umaMensagem("Isto ainda esta confuso em minha cabeça")