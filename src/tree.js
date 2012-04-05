Node = function (data) {
  this.name = data.name;
  this.html = $('\
  <div class="node" style="display:block">\
    <span class="name">'
      + this.name +
    '</span>\
    <div class="children" style="display:none">\
    </div>\
  </div>'
  );

  var self = this;

  //criação de filhos
  this.children = [];
  if(data.children) {
    data.children.forEach(function (child) {
      var new_node = new Node(child);
      self.children.push(new_node);
      self.html.find('div.children:eq(0)').append(new_node.html);
    });
  }

  //clicks
  this.html.find('span.name:eq(0)').click(function() {
    var children = self.html.find('div.children:eq(0)')
    if(children.css('display')=='block'){
      children.css('display','none');
    }
    else{
      children.css('display','block');
    }
  });
};
