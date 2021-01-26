var uLoginCss = {
    style : '/public/css/uLogin/main.css'
};

module.exports.index =function(req,res) {
    res.render('userLogin',{
        title: 'Login',
        uLoginCss: uLoginCss
       });
    
};
