var socket = io.connect('http://localhost')
  , $body = $('body');

socket.on('update', function (data) {
  $body.html(markdown.toHTML(data));
  MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
});
