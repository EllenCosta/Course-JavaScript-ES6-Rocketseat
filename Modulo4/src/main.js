import api from './api';

class Api {
    constructor() {
        this.repositorio = [];
        this.btn = document.querySelector('#btn');
        this.form = document.querySelector('#form');
        this.input = document.querySelector('input[name=repositorio]');
        this.ul = document.querySelector('#lista');
        this.evento();
    }

    evento() {
        this.btn.onclick = event => this.addRepo(event);
    }

    async addRepo(event) {
        event.preventDefault();
        const campo = this.input.value;
        if(campo === 0) {
            return;
        }
        this.carregar();
        try {
            this.erroBusca(false);
            const repos = await api.get(`/repos/${campo}`);
            console.log(repos);
            const {owner: {avatar_url}, name, description, html_url} = repos.data;
            this.repositorio.push({
                avatar_url,
                name,
                description,
                html_url
            });
            this.input.value = '';
            this.input.focus();
            this.render();
        } catch (err) {
            this.erroBusca();
            this.input.value = '';
            this.input.focus();
        }
        this.carregar(false);    
    }

    erroBusca(load = true) {
        if(load === true) {
            let img = document.createElement('img');
            img.setAttribute('src','new.png');
            img.setAttribute('id','erro');
            this.ul.appendChild(img);
        } else {
            document.querySelector('#erro').remove();
        }
    }

    carregar(loading = true) {
        if(loading === true) {
            let span = document.createElement('span');
            span.appendChild(document.createTextNode('Carregando...'));
            span.setAttribute('id','load');
            this.ul.appendChild(span);
        } else {
            document.querySelector('#load').remove();
        }
    }

    render() {
        this.ul.innerHTML = '';
        this.repositorio.forEach(repo => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.setAttribute('src', repo.avatar_url);
            let strong = document.createElement('strong');
            strong.appendChild(document.createTextNode(repo.name));
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(repo.description));
            let a = document.createElement('a');
            a.setAttribute('href', repo.html_url);
            a.setAttribute('target','_blank');
            a.appendChild(document.createTextNode('Acessar'));
            li.appendChild(img);
            li.appendChild(strong);
            li.appendChild(p);
            li.appendChild(a);

            this.ul.appendChild(li);
        });
    }
}

new Api();