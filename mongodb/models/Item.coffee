mongoose = require "mongoose"
{Schema} = mongoose

Todo = 
  title: 
    type: String
    required: true
  completed:
    type: Boolean
    required: true
    default: false


noWrite = ->
  perms =
    read: true
    write: false
  return perms

hidden = ->
  perms =
    read: false
    write: false
  return perms

Item = new Schema
  author:
    type: Schema.Types.ObjectId
    ref: 'User'
    authorize: noWrite

  title:
    type: String
    required: true

  content:
    type: String
    validate: (v) ->
      if @kind is "note"
        return v?.length > 0 
      return !v?

  todos:
    type: [Todo]
    validate: (v) ->
      if @kind is "todo"
        return v?.length > 0
      return v.length is 0


  kind:
    type: String
    required: true
    default: "note"
    enum: [
      "note"
      "todo"
    ]


  # Dates
  created_at:
    type: Date
    default: Date.now
    authorize: noWrite

  updated_at:
    type: Date
    default: Date.now
    authorize: noWrite

Item.methods.authorize = (req) ->
  isAuthor = String(req.user._id) is String(this.author)
  perms =
    read: isAuthor
    write: isAuthor
    delete: isAuthor
  return perms

Item.statics.authorize = (req) ->
  loggedIn = req.user?
  perms =
    read: loggedIn
    write: loggedIn
  return perms

module.exports = Item