//1.1
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export default async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
};
umPorSegundo();

//1.2
import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}
getUserFromGithub('ellencosta');
getUserFromGithub('ellencosta125124');

//1.3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/users/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.warn('Repositório não existe');
        }
    }
}

Github.getRepositories('ellencosta');
Github.getRepositories('rocketseat/rocketseat.com.br');

//1.4
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}
buscaUsuario('ellencosta');
buscaUsuario('ellencosta125124');