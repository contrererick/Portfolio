import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) =>{
    if(error){
        console.log("Something went wrong. Server can not be initalized. Error: ", error);
    }
    else{
        console.log("Server is running on port " + PORT);
    }
});
