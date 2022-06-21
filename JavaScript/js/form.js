var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    var erros = validaPaciente(paciente);
    if(erros.lenght > 0){

    } 
    tabela.appendChild(pacienteTr);
    

    form.reset();
})

    function obtemPacienteDoFormulario(form){
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }

    function montaTd(dado, classe){
        var td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;
        return td;
    }

    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");

        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
        
        return pacienteTr
    }

    function validaPaciente(paciente){

        var erros = [];

        if(paciente.nome.lenght == 0){
            erros.push("O Nome não pode ser em branco");
        }
        if(paciente.gordura.lenght == 0){
            erros.push("A gordura não pode ser em branco");
        }
        if(paciente.peso.lenght == 0){
            erros.push("O peso não pode ser em branco")
        }
        if(paciente.altura.lenght == 0){
            erros.push("A altura não pode ser em branco")
        }
        if(!validaPeso(paciente.peso)){
            erros.push("Peso é inválido");
        }
        if(!validaAltura(paciente.altura)){
            erros.push("Altura é inválida")
        }
        return erros;
    }