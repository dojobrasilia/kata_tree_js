Node = function (data) {
  this.name = data.name;
  this.html = $('\
    <div class="node">'
      + this.name +
    '</div>'
  );

  var self = this;

  this.children = [];
  if(data.children)
    data.children.forEach(function (child) {
      var new_node = new Node(child);
      self.children.push(new_node);
      self.html.append(new_node.html);
    });
};
