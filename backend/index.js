const require = require("express");
 








app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'testuser' && password === 'password123') {
        res.status(200).json({ token: 'abcd1234' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});
app.post(/blog)