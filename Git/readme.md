<a url="https://git-scm.com"><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge-appveyor&logo=git&logoColor=white&labelColor=gray&color=gray" width="150"></a>
## Comandos iniciais
___
~~~git
git init
~~~
Inicializa um repositório git em uma pasta selecionada.
~~~git
git status
~~~
Exibe as altrações realizadas no repositório.
~~~git
git add <arquivo>
~~~
Adiciona arquivo(s) para realizar o commit.
~~~git
git commit -m "<Mensagem do comit>"
~~~
Realiza o commit na branch atual
~~~git
git log
~~~
Exibe os commits realizados.
// O comando log pode receber diversos parametros para filtrar a busca, clicanco <a url="https://devhints.io/git-log.">aqui</a>.

~~~git
git init --bare
~~~
Cria um repositório que somente armazenará as alterações.
~~~git
git clone
~~~
Clona um repositório 

~~~git
git remote add local <endereço do repositório>
~~~
Adiciona um endereçamento remoto para o meu diretório onde poderão ser enviados arquivos (<code>push</code>) e baixados (<code>pull</code>) como no exemplo abaixo:
~~~git
git push local master
git pull local master
~~~

**OBS:** Existe um arquivo especial do Gitm chamado <code>.gitgnore</code>, e todas as linhas que estiverem nele serão lidos e eignorados pelo Git.

## Desfazendo alterações
___

~~~git
git checkout -- <arquivo>
~~~
Serve para navegar em estados do repositório, seja por meio de branches ou desfazendo modificações no arquivo.

~~~git
git reset HEAD <arquivo>
~~~~
Caso a alteração a ser corrigida já tenha sido adicionada para o commit, usa-se o *<code>git reset head*</code>.

~~~git
git revert <hash do commit>
~~~
Caso já tenhamos ralizado o commit, o comando <code>git revert</code> acompanhado do hash do commit reverte o projeto desfazendo aquele commit.

