import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import globalErrorHandler from './controller/errorController.js' ;
import bodyParser from 'body-parser';
import AppError from './utils/appError.js';
//importing Routes
import usersRouter from './routes/userRoute.js';
//require('./config/passport').default(passport);

// Initialize the app
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true)
    next();
  });

// Defining the Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//user route
app.use('/api/users', usersRouter);

//error handling
app.all('*', (req, res, next) => {
    next (new AppError(`can't find ${req.originalUrl} on this server!`))
})

app.use(globalErrorHandler);

export default app;
