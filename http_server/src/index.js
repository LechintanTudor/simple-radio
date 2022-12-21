import express from 'express';
import path from 'path';

const app = express()
const port = 3000

const workingDirectory = path.resolve();
const htmlDirectory = 'html';
const streamDirectory = '../stream';

const htmlPath = (fileName) => path.join(workingDirectory, htmlDirectory, fileName);
const streamPath = (fileName) => path.join(workingDirectory, streamDirectory, fileName);

app.get('/', (_req, res) => {
    res.sendFile(htmlPath('index.html'));
});

app.get('/stream', (_req, res) => {
    res.sendFile(streamPath('song.mpd'));
});
    
app.get('/*', (req, res) => {
    const chunkPath = streamPath(req.params[0]);
    console.log(`Sending: ${chunkPath}`);
    res.sendFile(chunkPath);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
