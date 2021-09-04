<template><p align="center">
    <a href="https://github.com/danielkauffmann/poodle">
        <img src="/images/rlogo.png" width="200" height="200" alt="Moodle Organizer Bot" >
    </a>
</p>
<p><a href="https://pypi.org/project/poodle/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/pypi/v/poodle" alt="PyPi Package Version"><OutboundLink/></a>
<a href="https://pypi.org/project/poodle/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/pypi/pyversions/poodle" alt="Supported Python versions"><OutboundLink/></a>
<a href="https://github.com/danielkauffmann/poodle/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/danielkauffmann/poodle" alt="LICENSE"><OutboundLink/></a>
<a href="https://codecov.io/gh/danielkauffmann/poodle" target="_blank" rel="noopener noreferrer"><img src="https://codecov.io/gh/danielkauffmann/poodle/branch/main/graph/badge.svg?token=D7OI3GWKRT" alt="codecov"><OutboundLink/></a></p>
<h1 id="introducao" tabindex="-1"><a class="header-anchor" href="#introducao" aria-hidden="true">#</a> Introdução</h1>
<p>Poodle é uma integração escrita em Python com as APIs do Moodle Web Service (MWS). A interação é feita através das
funcionalidades mapeadas e disponibilizadas nativamente pelo Moodle e foram construídas para facilitar a extração
destes dados.</p>
<p>Atualmente este projeto juntamente ao <a href="https://github.com/lsglucas/mob" target="_blank" rel="noopener noreferrer">Moodle Organizer Bot<OutboundLink/></a> formam uma aplicação
grande e complexa onde visa a integração do Moodle no ambiente do Discord para quaisquer plataformas de ensino.</p>
<h2 id="como-funciona" tabindex="-1"><a class="header-anchor" href="#como-funciona" aria-hidden="true">#</a> Como funciona</h2>
<p>Atravez de um token de acesso gerado pelo <a href="https://moodle.org/" target="_blank" rel="noopener noreferrer">Moodle<OutboundLink/></a>, é possível interagir com todas APIs disponíveis
e o Poodle está aqui para facilitar este processo, além de prover funcionalidades otimizadas e performáticas de acordo
com a demanda de dados.</p>
<p>Por conta da finalidade utilizada atualmente, toda a documentação sobre formatação dos dados estão extremamente
detalhadas enquanto não há necessidades de generalizar a aplicação. Lembrando que existem outras implementações com a
mesma ideia, tais como <a href="https://github.com/hexatester/moodlepy" target="_blank" rel="noopener noreferrer">moodlepy<OutboundLink/></a> que possui um papel de atender demandas
genéricas do MWS.</p>
<h2 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao" aria-hidden="true">#</a> Motivação</h2>
<p>Certo dia estavamos no Discord jogando Rocket League e percebemos que já estava no horário da aula.
Nisso, surgiu a seguinte conversa:</p>
<div style="display: flex; width: fit-content; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/61513630?v=4" width="32px;" alt="Lucas"/>
    <div style="align-self: center; margin-left: .5rem; font-size: .8rem">
        a gente podia ter algum jeito de saber as aulas no Discord né?
    </div>
</div>
<div style="display: flex; width: fit-content; margin-left: auto; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <div style="align-self: center; margin-right: .5rem; font-size: .8rem">
        se o Moodle tiver API dá kkkkk
    </div>
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/62577994?v=4" width="32px;" alt="Daniel"/>
</div>
<div style="display: flex; width: fit-content; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/61513630?v=4" width="32px;" alt="Lucas"/>
    <div style="align-self: center; margin-left: .5rem; font-size: .8rem">
        mano kkkkkk será?
    </div>
</div>
<div style="display: flex; width: fit-content; margin-left: auto; margin-bottom: 1rem; padding: .4rem; background-color: rgba(70, 70, 70, 0.3); border-radius: 10px;">
    <div style="align-self: center; margin-right: .5rem; font-size: .8rem">
        vou dar uma olhada pra ver se acho algo
    </div>
    <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/62577994?v=4" width="32px;" alt="Daniel"/>
</div>
<p>Dias depois voltei com a notícia que esta API realmente existia e havia encontrado a
<a href="https://docs.moodle.org/dev/Web_service_API_functions" target="_blank" rel="noopener noreferrer">documentação oficial<OutboundLink/></a> para diferentes funcionalidades, apenas
bastava descobrir se a nossa universidade (<a href="https://www.mackenzie.br/" target="_blank" rel="noopener noreferrer">UPM<OutboundLink/></a>) tinha estes recursos públicos.
Mais alguns dias seguintes, validamos a nossa teoria e prosseguimos com o desenvolvimento da ideia.</p>
<p>Assim então surgiu a ideia de construir esta integração e fomos aperfeiçoando a ideia até chegar no modelo onde haveria
um Bot no Discord responsável por mandar avisos sobre trabalhos e visualizar aulas durante a semana.
A partir deste momento, a nossa criatividade descolou e não paramos até então.</p>
<h2 id="criadores" tabindex="-1"><a class="header-anchor" href="#criadores" aria-hidden="true">#</a> Criadores</h2>
<p>Eu (Daniel) e o Lucas temos prazer em desenvolver este projeto em conjunto, produzindo as nossas ideias e disponibilizando
para qualquer um fazer proveito e ajudar-nos a aperfeiçoar o projeto. Esperamos que tire algum aprendizado sempre!</p>
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
</table></template>
