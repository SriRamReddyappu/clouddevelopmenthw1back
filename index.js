const express=require('express');
const app=express();
const port = process.env.port || 3000;


app.get('/',(req,res) => {
    res.send('<h1>Hello from [Sri Ram]\'s web app </h1>');
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});