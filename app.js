const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send(`
        <html>
            <body style="font-family: Arial; background-color: #1a1a2e; color: white; text-align: center; padding: 50px;">
                <h1>⚽ Bem-vindo ao AMÉRICO ESPORTES</h1>
                <p>Seu portal de esportes favorito</p>
                <br>
                <a href="/modalidades" style="color: #00d4ff;">Ver Modalidades</a> |
                <a href="/atleta/Ronaldo" style="color: #00d4ff;">Exemplo de Atleta</a> |
                <a href="/inscricao/Futebol" style="color: #00d4ff;">Exemplo de Inscrição</a>
            </body>
        </html>
    `);
});

app.get("/modalidades", function(req, res) {
    res.send(`
        <html>
            <body style="font-family: Arial; background-color: #1a1a2e; color: white; text-align: center; padding: 50px;">
                <h1>🏅 Modalidades Disponíveis</h1>
                <ul style="list-style: none; font-size: 20px;">
                    <li>⚽ Futebol</li>
                    <li>🏀 Basquete</li>
                    <li>🎾 Tênis</li>
                    <li>🏊 Natação</li>
                    <li>🥊 Boxe</li>
                </ul>
                <br>
                <a href="/" style="color: #00d4ff;">← Voltar ao Início</a>
            </body>
        </html>
    `);
});

app.get("/atleta/:nome", function(req, res) {
    var nome = req.params.nome;
    res.send(`
        <html>
            <body style="font-family: Arial; background-color: #1a1a2e; color: white; text-align: center; padding: 50px;">
                <h1>🏆 Atleta Encontrado!</h1>
                <p style="font-size: 24px;">Nome: <strong>${nome}</strong></p>
                <br>
                <a href="/" style="color: #00d4ff;">← Voltar ao Início</a>
            </body>
        </html>
    `);
});

app.get(["/inscricao", "/inscricao/:modalidade"], function(req, res) {
    var modalidade = req.params.modalidade;
    if (modalidade) {
        res.send(`
            <html>
                <body style="font-family: Arial; background-color: #1a1a2e; color: white; text-align: center; padding: 50px;">
                    <h1>✅ Inscrição Realizada!</h1>
                    <p style="font-size: 22px;">Você foi inscrito em: <strong>${modalidade}</strong></p>
                    <br>
                    <a href="/" style="color: #00d4ff;">← Voltar ao Início</a>
                </body>
            </html>
        `);
    } else {
        res.send(`
            <html>
                <body style="font-family: Arial; background-color: #1a1a2e; color: white; text-align: center; padding: 50px;">
                    <h1>📋 Inscrição</h1>
                    <p>Nenhuma modalidade informada!</p>
                    <br>
                    <a href="/" style="color: #00d4ff;">← Voltar ao Início</a>
                </body>
            </html>
        `);
    }
});

app.listen(process.env.PORT ?? 3000, function(erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor SportHub Iniciado! ⚽");
    }
});
