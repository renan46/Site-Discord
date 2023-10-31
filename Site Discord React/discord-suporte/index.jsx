{/*
Marcelo Guimarães 3ºSem/2023 - Turma C
Professor Bruno Oliveira
ADO2: Reproduzir a página SUPORTE do site do Discord em uma aplicação REACTJS utilizando os conceitos de JSX, COMPONENTE, PROPS, SASS e FLEXBOX
*/ }

import './index.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Cabecalho from './components/Cabecalho'
import Card from './components/Card'
import Background from './components/imgs/background-suporte.png'
import megafone from './components/imgs/icon-megafone.svg'
import painel from './components/imgs/icon-painel.svg'
import engine from './components/imgs/icon-engine.svg'
import send from './components/imgs/icon-send.svg'
import control from './components/imgs/icon-control.svg'
import escudo from './components/imgs/icon-escudo.svg'
import lupa from './components/imgs/icon-lupa.svg'
import power from './components/imgs/icon-power.svg'
import celular from './components/imgs/icon-celular.svg'
import logo from './components/imgs/icon-discord.svg'
import notas from './components/imgs/bloco-notas.svg'
import barraca from './components/imgs/barraquinha.svg'
import logotipo from './components/imgs/logo-Discord-2.svg'
import rodape from './components/imgs/background-suporte-rodape.png'

ReactDOM.render(
    <div className='Grid-Geral'>
        <div>
            <div className='menu-superior'>
                <div className='img-ms'>{<img src={logotipo} />}</div>

                <section className='menu-botao'>
                    <a className='ms1' href="//support.discord.com/hc/en-us/community/topics">
                        <h3>Feedback</h3>
                    </a>
                    <a className='ms2' href="//support.discord.com/hc/pt-br">
                        <h3>Português do Brasil</h3>
                    </a>
                    <a className='ms3' href="//support.discord.com/hc/pt-br/requests/new">
                        <h3>Enviar uma solicitação</h3>
                    </a>
                    <a className='ms4' href="//hammerandchisel.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.discord.com%2Fhc%2Fpt-br%2Frequests%2Fnew&theme=hc&locale=pt-br&brand_id=96508&auth_origin=96508%2Ctrue%2Ctrue">
                        <h3>Entrar</h3>
                    </a>
                </section>
            </div>

            <div>
                <img className='img-fundo' src={Background} />
                <div className='txt-fundo'>
                    <h1>"Central de Ajuda"</h1>
                </div>
            </div>
        </div>

        <div className='Cabecalho'><Cabecalho /></div>

        <ul className='Grid-1'>
            <a href="//support.discord.com/hc/pt-br/categories/115000193752">
                <Card imagem={<img src={megafone} />} titulo="Anúcios" paragrafo="Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo." /></a>
            <a href="//support.discord.com/hc/pt-br/categories/200404398">
                <Card imagem={<img src={painel} />} titulo="Interface do Discord" paragrafo="PRA QUE SERVE ESSE BOTÃO!?!!" /></a>
            <a href="//support.discord.com/hc/pt-br/categories/200404358">
                <Card imagem={<img src={engine} />} titulo="Configurações de Conta" paragrafo="Você é importante e sua conta também." /></a>
            <a href="//support.discord.com/hc/pt-br/categories/115000217151">
                <Card imagem={<img src={send} />} titulo="Começando" paragrafo="Comece com o pé direito! Não com o esquerdo!" /></a>
            <a href="//support.discord.com/hc/pt-br/categories/200404378">
                <Card imagem={<img src={control} />} titulo="Configurações de Serviço" paragrafo="Quase tão emocionante quanto decoração de interiores." /></a>
            <a href="//support.discord.com/hc/pt-br/categories/115000167372">
                <Card imagem={<img src={power} />} titulo="Programas Comunitários" paragrafo=" Hype para HypeSquaders, party para Parceiros." /></a>
            <a href="//support.discord.com/hc/pt-br/categories/360001025912">
                <Card imagem={<img src={barraca} />} titulo="Nitro" paragrafo="Por favor, não compre até cair. Deixe a gente te ajudar." /></a>
            <a href="//support.discord.com/hc/pt-br/categories/360001029051">
                <Card imagem={<img src={notas} />} titulo="Formas de Pagamento" paragrafo="Aquela sensação quando você olha o seu saldo." /></a>
            <a href="//support.discord.com/hc/pt-br/categories/115000168351">
                <Card imagem={<img src={escudo} />} titulo="Confiança & Segurança" paragrafo="Mantenha as coisas sãs e salvas para você e seus amigos" /></a>
            <a href="//support.discord.com/hc/pt-br/categories/115000168371">
                <Card imagem={<img src={lupa} />} titulo="F.A.Q.s" paragrafo=" Tudo o que puder fazer num auto-atendimento." /></a>
        </ul>

        <div className='Subtitulo'><h2>Outras formas de conseguir ajuda!</h2></div>

        <ul className='Grid-2'>
            <a href="//support-dev.discord.com/hc/pt-br">
                <Card imagem={<img src={logo} />} titulo="Desenvolvedores de Jogos" paragrafo="Sua casa para suporte com o desenvolvimento de bots, aplicativos e jogos usando nossa API e SDK!" /></a>
            <a href="//twitter.com/discord">
                <Card imagem={<img src={celular} />} titulo="Twitter" paragrafo="Alguma perguntinha rápida? Chame a gente no Twitter." /></a>
        </ul>

        <footer className='rodape'>
            <button class="botao">Saiba Mais</button>
            <div className='img-rodape'>{<img src={rodape} />}</div>

            <div className='menu-rodape'>
                <div className='menu-rodape4'>{<img src={logotipo} />}</div>
                <ul className='menu-rodape1'>
                    <a href="//">
                        <h3>Download</h3></a>
                    <a href="//">
                        <h3>Ajuda</h3></a>
                    <a href="//">
                        <h3>Feedback</h3></a>
                    <a href="//">
                        <h3>Status</h3></a>
                </ul>

                <ul className='menu-rodape2'>
                    <a href="//">
                        <h3>Parceiros</h3></a>
                    <a href="//">
                        <h3>Hypesquad</h3></a>
                    <a href="//">
                        <h3>Merchandising</h3></a>
                    <a href="//">
                        <h3>Branding</h3></a>
                </ul>

                <ul className='menu-rodape3'>
                    <a href="//">
                        <h3>Companhia</h3></a>
                    <a href="//">
                        <h3>Trabalhe Conosco</h3></a>
                    <a href="//">
                        <h3>Blog</h3></a>
                    <a href="//">
                        <h3>Termos&Privaciade</h3></a>
                </ul>
            </div>

            <button className="botaoAjuda">Ajuda</button>

        </footer>
    </div>,
    document.getElementById('root')
)