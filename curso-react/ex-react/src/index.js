import ReactDOM from 'react-dom'
import React from 'react'
import PrimeroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB as B} from './componentes/VariosComponentes'
import MultiElementos from './componentes/MultiElementos'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteComClasse'
import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <PrimeroComponente valor="Olá conteúdo baseado em assistir os outros" valor2="ask;dka;sdk;"/>
        <CompA valor="KK IACORE"/>
        <B valor="KKERDA"/>
        <MultiElementos/>
        <Familia sobrenome="Joestar">
            <Membro nome="Jorge"/>
            <Membro nome="Jonathan"/>
            <Membro nome="Joseph"/>
        </Familia>
        <ComponenteComFuncao/>
        <Pai/>
        <ComponenteClasse valor='AaAAA'/>
        <Contador numero="0"/>
        <Hook/>
    </div>
, elemento)