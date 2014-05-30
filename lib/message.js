module.exports = Message;

function Message () {

  if (!(this instanceof Message)) {
    var m = new Message();
    Message.prototype.initialize.apply(m, Array.prototype.slice.call(arguments));
    return m
  }
  else {
    Message.prototype.initialize.apply(this, Array.prototype.slice.call(arguments));
  }

}

Message.prototype.initialize = function (a, b, c, d, e) {
  if (arguments.length === 1 && typeof a === 'object') {
    this.data = a;
  }
  else {
    this.data = {};
    this.data.actor = a;
    this.data.action = b;
    this.data.content = c;
    this.data.target = d;
    this.data.created = e;
  }

  if (!this.data) {
    this.data = {};
  }
  
  if (!this.data.created) {
    this.data.created = new Date();
  }
};

Message.prototype.clone = function () {
  return new Message(this.data);
};