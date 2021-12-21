module.exports = (srv) => {

    srv.after('READ', 'Error', (each) => {
        if (each.id == 1) each.errorNumber = 0
    })

};