<p align="center">
    <a href="https://github.com/danielkauffmann/poodle">
        <img src="/images/rlogo.png" width="200" height="200" alt="Moodle Organizer Bot" >
    </a>
</p>

[![PyPi Package Version](https://img.shields.io/pypi/v/poodle)](https://pypi.org/project/poodle/)
[![Supported Python versions](https://img.shields.io/pypi/pyversions/poodle)](https://pypi.org/project/poodle/)
[![LICENSE](https://img.shields.io/github/license/danielkauffmann/poodle)](https://github.com/danielkauffmann/poodle/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/danielkauffmann/poodle/branch/main/graph/badge.svg?token=D7OI3GWKRT)](https://codecov.io/gh/danielkauffmann/poodle)


# Introdução
Poodle é uma integração escrita em Python com as APIs do Moodle Web Service (MWS). A interação é feita através das
funcionalidades mapeadas e disponibilizadas nativamente pelo Moodle e foram construídas para facilitar a extração
destes dados.

Atualmente este projeto juntamente ao [Moodle Organizer Bot](https://github.com/lsglucas/mob) formam uma aplicação 
grande e complexa onde visa a integração do Moodle no ambiente do Discord para quaisquer plataformas de ensino.


## Como funciona
Atravez de um token de acesso gerado pelo [Moodle](https://moodle.org/), é possível interagir com todas APIs disponíveis
e o Poodle está aqui para facilitar este processo, além de prover funcionalidades otimizadas e performáticas de acordo 
com a demanda de dados.

Por conta da finalidade utilizada atualmente, toda a documentação sobre formatação dos dados estão extremamente 
detalhadas enquanto não há necessidades de generalizar a aplicação. Lembrando que existem outras implementações com a
mesma ideia, tais como [moodlepy](https://github.com/hexatester/moodlepy) que possui um papel de atender demandas 
genéricas do MWS.


## Motivação
Certo dia estavamos no Discord jogando Rocket League e percebemos que já estava no horário da aula. 
Nisso, surgiu a seguinte conversa:

[comment]: <> (Lucas, 1)
<div style="display: flex; width: fit-content; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/61513630?v=4" width="32px;" alt="Lucas"/>
    <div style="align-self: center; margin-left: .5rem; font-size: .8rem">
        a gente podia ter algum jeito de saber as aulas no Discord né?
    </div>
</div>

[comment]: <> (Daniel, 1)
<div style="display: flex; width: fit-content; margin-left: auto; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <div style="align-self: center; margin-right: .5rem; font-size: .8rem">
        se o Moodle tiver API dá kkkkk
    </div>
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/62577994?v=4" width="32px;" alt="Daniel"/>
</div>

[comment]: <> (Lucas, 2)
<div style="display: flex; width: fit-content; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/61513630?v=4" width="32px;" alt="Lucas"/>
    <div style="align-self: center; margin-left: .5rem; font-size: .8rem">
        mano kkkkkk será?
    </div>
</div>

[comment]: <> (Daniel, 2)
<div style="display: flex; width: fit-content; margin-left: auto; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <div style="align-self: center; margin-right: .5rem; font-size: .8rem">
        vou dar uma olhada pra ver se acho algo
    </div>
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/62577994?v=4" width="32px;" alt="Daniel"/>
</div>

Dias depois voltei com a notícia que esta API realmente existia e havia encontrado a 
[documentação oficial](https://docs.moodle.org/dev/Web_service_API_functions) para diferentes funcionalidades, apenas
bastava descobrir se a nossa universidade ([UPM](https://www.mackenzie.br/)) tinha estes recursos públicos.
Mais alguns dias seguintes, validamos a nossa teoria e prosseguimos com o desenvolvimento da ideia. 

Assim então surgiu a ideia de construir esta integração e fomos aperfeiçoando a ideia até chegar no modelo onde haveria
um Bot no Discord responsável por mandar avisos sobre trabalhos e visualizar aulas durante a semana. 
A partir deste momento, a nossa criatividade descolou e não paramos até então.

## Criadores
Eu (Daniel) e o Lucas temos prazer em desenvolver este projeto em conjunto, produzindo as nossas ideias e disponibilizando
para qualquer um fazer proveito e ajudar-nos a aperfeiçoar o projeto. Esperamos que tire algum aprendizado sempre!

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/danielkauffmann">
        <img src="https://avatars.githubusercontent.com/u/62577994?v=4" width="150px;" alt="Daniel Kauffmann"/>
        <br />
        <a href="https://github.com/danielkauffmann">
          <b>Daniel Kauffmann</b>
        </a>
        <br />
        <p style="font-size: 2rem">
          <a href="mailto:vkdaniel@icloud.com">
            <img src="https://img.icons8.com/emoji/32/000000/envelope-.png" alt="E-mail"/>
          </a>
          <a href="https://www.linkedin.com/in/danielkauffmann">
            <img src="https://img.icons8.com/color/32/000000/linkedin.png" alt="Linkedin"/>
          </a>
          <a href="https://twitter.com/danieldowombo">
            <img src="https://img.icons8.com/fluency/32/000000/twitter--v3.png" alt="Twitter"/>
          </a>
        </p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lsglucas">
        <img src="https://avatars.githubusercontent.com/u/61513630?v=4" width="150px;" alt="Lucas Garcia"/>
        <br />
        <a href="https://github.com/lsglucas">
          <b>Lucas Garcia</b>
        </a>
        <br />
        <p style="font-size: 2rem">
          <a href="mailto:lsglucas@pm.me">
            <img src="https://img.icons8.com/emoji/32/000000/envelope-.png" alt="E-mail"/>
          </a>
          <a href="https://www.linkedin.com/in/lsglucas">
            <img src="https://img.icons8.com/color/32/000000/linkedin.png" alt="Linkedin"/>
          </a>
          <a href="https://twitter.com/lsglucass">
            <img src="https://img.icons8.com/fluency/32/000000/twitter--v3.png" alt="Twitter"/>
          </a>
        </p>
      </a>
    </td>
  </tr>
</table>