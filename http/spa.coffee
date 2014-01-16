app = require './express'
path = require 'path'


restFile = path.join 'public', "index.html"


app.get '/*', (req, res) ->
  res.sendfile restFile