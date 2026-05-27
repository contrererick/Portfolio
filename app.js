import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'public')));

app.get('/health-check', (req, res)=>{
    res.send('App Works!');
});

app.get('/{*path}', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

export default app;
