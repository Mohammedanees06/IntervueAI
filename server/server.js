require('dotenv').config();
const express =require('express');
const cors= require('cors');
const path=require('path');
const connectDB=require('./config/db');
const PORT= 5000
const app = express();
const authRoute=require('./routes/authRoute');
const sessionRoute=require('./routes/sessionRoute');
const questionRoute=require('./routes/questionRoute');


//middleware to handle cors
app.use(
    cors({
        origin:'*',
        methods:['GET','POST','DELETE','UPDATE','PUT','PATCH'],
        allowedHeaders:['Content-Type','Authorization']
    })
)

connectDB();
//middleware
app.use(express.json());


//routes
app.use('/api/auth', authRoute);
app.use('/api/questions',questionRoute);
app.use('/api/sessions', sessionRoute);


// app.use('/api/ai/generate-questions',protect, generateInterviewQuestions);
// app.use('/api/ai/generate-explanation',protect, generateConceptExplanation);
 

//server uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {}));


//starts server
app.listen( PORT ,()=> {
    console.log(`✅ Server is running on port ${PORT}`);
})