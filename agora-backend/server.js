require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Endpoint để gửi APP_ID tới client
app.get('/getAppId', (req, res) => {
    res.json({ appId: process.env.APP_ID });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
