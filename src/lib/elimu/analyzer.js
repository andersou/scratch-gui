import Fingerprint2 from "fingerprintjs2";
import io from "socket.io-client";
let socket;
let finger = new Fingerprint2({ excludeUserAgent: true }).get(function(
    result,
    components
) {
    console.log("Fingerprint : ");
    console.log(result); // a hash, representing your device fingerprint
    console.log(components); // an array of FP components
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.bottom = "0px";
    div.style.backgroundColor = "rgba(0,0,0,0.3)";
    div.style.color = "white";
    div.style.padding = "5px";
    div.style.borderRadius = "5px";
    div.textContent = `Sua fingerprint é ${result}`;
    document.body.appendChild(div);
    socket = io("/", {
        query: {
            fingerprint: result
        }
    });
    let nome = "";
    while (!nome) nome = prompt("Insira um nome de usuário:");
    socket.emit("login", nome);

    window.socketio = socket;
});

export default {
    enviarDadosAluno(vm) {
        console.log("enviar dados aluno")
        window.vmScratch = vm;
        socket.emit("dados_aluno", JSON.stringify(vm.toJSON()));
    }
};
