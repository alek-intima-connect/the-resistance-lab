const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const PROJECT_DIR = 'theresistancelab';

app.use('/theresistancelab', express.static(path.join(__dirname, PROJECT_DIR)));

app.get('/', (req, res) => {
    res.redirect('/theresistancelab/index.html');
});

// 2. Main Entry Point
app.get('/theresistancelab', (req, res) => {
    res.sendFile(path.join(__dirname, PROJECT_DIR, 'index.html'));
});

app.use((req, res) => {
    res.status(404).send(`
        <h1 style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            404 // SIGNAL LOST
        </h1>
        <p style="text-align: center;">The requested frequency does not exist.</p>
    `);
});

app.listen(PORT, () => {
    console.log(`\n/// THE RESISTANCE LAB IS ONLINE ///`);
    console.log(`> Transmitting at: http://localhost:${PORT}/theresistancelab`);
    console.log(`> Press Ctrl+C to terminate signal.\n`);
});
