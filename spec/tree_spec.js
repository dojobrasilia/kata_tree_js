describe("Tree", function() {

  describe("Node", function() {

    describe("object creation", function() {

    	it("creates a node from JSON", function () {
        var json = {name: 'node'};
        var node  = new Node(json)

        expect(node.name).toBe('node');
        expect(node instanceof Node).toBe(true);
      });

      it("creates a node with a child from JSON", function () {
        var json = {name: 'node', children:[{name:'child'}]};
        var node  = new Node(json)

        expect(node.children[0].name).toBe('child');
        expect(node.children[0] instanceof Node).toBe(true);
      });

      it("creates a node with two children from JSON", function () {
        var json = {name: 'node', children:[{name:'child1'}, {name:'child2'}]};
        var node  = new Node(json)

        expect(node.children[0].name).toBe('child1');
        expect(node.children[0] instanceof Node).toBe(true);

        expect(node.children[1].name).toBe('child2');
        expect(node.children[1] instanceof Node).toBe(true);
      });

      it("creates a node with one grand_child from JSON", function () {
        var json = {name: 'node', children:[{name:'child1', children:[{name:'grand_child'}]}]};
        var node  = new Node(json)

        var grand_child = node.children[0].children[0];
        expect(grand_child.name).toBe('grand_child');
        expect(grand_child instanceof Node).toBe(true);
      });

    });

    describe("html creation", function() {

      it("creates a div with node's name when a Node is created", function () {
        var json = {name: 'node', children:[{name:'child1', children:[{name:'grand_child'}]}]};
        var node  = new Node(json);

        expect($('<p></p>').append(node.html).html()).toContain('<div class="node">node');
      });

      it("creates a div for each node", function () {
        var json = {name: 'node', children:[{name:'child1', children:[{name:'grand_child'}]}]};
        var node  = new Node(json);

        expect($('<p></p>').append(node.html).find('.node').length).toBe(3);
      });

    });

  });

});