# Comandos básicos do git


> Verificar se o git está instalado:
~~~bash
     git --version
~~~


>  Vincular um repositório local a um repositório remoto:
~~~bash
     git remote add https://github.com/user/repo.git
~~~


<br/>


>  Adicionar todos os arquivos para a “staging area”:
~~~bash
     git add .
~~~


<br/>


> Verifica os arquivos que estão ( e os que não estão ) na  ”staging area”:
~~~bash
     git status
~~~


<br/>


> Faz um commit (Lembre-se sempre de escrever mensagens explicativas em seus commits): 
~~~bash
     git commit -m "sua mensagem"
~~~


<br/>


> Faz o upload dos ***arquivos em staging***:
~~~bash
     git push origin branch_bname 
~~~


<br/>


> Faz um download da branch remota, trazendo os arquivos para o repositório local:
~~~bash
     git pull origin branch_name
~~~