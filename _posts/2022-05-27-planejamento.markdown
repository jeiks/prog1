---
layout: post
title:  "Planejamento"
date:   2022-05-26 10:44:26 -0300
categories: jekyll update
---

<ul>
{% for aula in site.data.planejamento %}
    <li>
    {{aula.data}} ({{aula.aula}}): {{aula.conteudo}}
    </li>
{% endfor %}
</ul>

