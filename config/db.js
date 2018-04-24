const db_conn_string = process.env.MONGODB_URI || 'mongodb://heroku_ff4kqnxp:5vppf5fkcfsri34i4scnjf26cr@ds157089.mlab.com:57089/heroku_ff4kqnxp'
module.exports = {
    DB: db_conn_string
}

