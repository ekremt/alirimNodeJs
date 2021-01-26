module.exports= function(app) {
    const userLoginRoute=require('./userLoginRoute');
    const homeRoute=require('./homeRoute');

    app.use('/',homeRoute);
    app.use('/uLogin',userLoginRoute);
    
};
