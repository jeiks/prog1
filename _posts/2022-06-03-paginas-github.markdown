---
layout: post
title:  Páginas dos alunos no GitHub
date:   2022-06-03 18:00:00 -0300
---

<ul>
{% for page in site.data.paginas %}
    <li>
    Matrícula {{page.matricula}}: <a href='{{page.pagina}}'>{{page.nome}}</a>
    </li>
{% endfor %}
</ul>

