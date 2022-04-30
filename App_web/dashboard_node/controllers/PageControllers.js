const vistaPrincipal = (req, res)=>{
    res.render('home')
}

const vistasTables = (req, res)=>{
    res.render('tables')
}

const vistasNotifications = (req, res)=>{
    res.render('notifications')
}

module.exports = {
    vistaPrincipal,
    vistasTables,
    vistasNotifications
}