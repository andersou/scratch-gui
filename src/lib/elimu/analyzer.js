import io from "socket.io-client";
import db from "./project-database";

let socket = null;
window.addEventListener("load", function () {
    socket = io("https://elimu-scratch.herokuapp.com/");
    let nome = "";
    while (!nome) nome = prompt("Insira um nome de usuário:");
    socket.emit("login", nome);
});
let eventoWrapper = function (nomeDoEvento) {
    return function () {
        console.log(nomeDoEvento)
        console.log(this)
        enviarDadosAluno(nomeDoEvento, this);
        salvarProjeto(nomeDoEvento, this);
    }
}
let salvarProjeto = (evento, vm) => {
    vm.saveProjectSb3().then(projeto => {
        db.projects.add({
            timestamp: new Date(),
            project: projeto,
            event: evento
        });
    });
}
let enviarDadosAluno = (evento, vm) => {
    window.vmScratch = vm;
    if (socket)
        socket.emit("dados_aluno", { evento, projeto: vm.toJSON() });
}
export default {
    bindEvents(vm) {
        //escutar eventos
        // vm.on("targetsUpdate", eventoWrapper("targetsUpdate"));
        vm.on("MONITORS_UPDATE", eventoWrapper("MONITORS_UPDATE"));
        vm.on("BLOCK_DRAG_UPDATE", eventoWrapper("BLOCK_DRAG_UPDATE"));

        vm.on("TURBO_MODE_ON", eventoWrapper("TURBO_MODE_ON"));
        vm.on("TURBO_MODE_OFF", eventoWrapper("TURBO_MODE_OFF"));
        vm.on("PROJECT_RUN_START", eventoWrapper("PROJECT_RUN_START"));
        vm.on("PROJECT_RUN_STOP", eventoWrapper("PROJECT_RUN_STOP"));
    }
};
