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
        expect(node.html.get(0).tagName).toBe('DIV');
      });

      it("creates a div.children inside div.node", function () {
        var json = {name: 'node'};
        var node  = new Node(json);
        expect(node.html.find('div.children').length).toBe(1);
      });

      it("creates a div and a div.children for each node", function () {
        var json = {name: 'node', children:[{name:'child1', children:[{name:'grand_child'}]}]};
        var node  = new Node(json);

        expect(node.html.get(0).tagName).toBe('DIV');
        expect(node.html.find('div.children').length).toBe(3);
        expect(node.html.find('div.node').length).toBe(2);
      });

      it("creates children inside div.children", function () {
        var json = {name: 'node', children:[{name:'child1', children:[{name:'grand_child'}]}]};
        var node  = new Node(json);

        expect(node.html.find('div.children:eq(0)').find('div.node').length).toBe(2);
      });

    });

    describe("open and close nodes", function() {

      it("opens children when node's name is clicked", function () {
        var grand_child = {name: 'grand_child'};
        var child1 = {name: 'child1', children:[grand_child]};
        var child2 = {name: 'child2', children:[grand_child]};
        var father = {name: 'father', children:[child1, child2]};

        var node  = new Node(father);

        expect(node.html.css('display')).toBe('block');
        expect(node.html.find('div.children:eq(0)').css('display')).toBe('none');

        node.html.find('span.name:eq(0)').click();

        expect(node.html.css('display')).toBe('block');
        expect(node.html.find('div.children:eq(0)').css('display')).toBe('block');
        
        node.html.find('> span.name').click();

        expect(node.html.css('display')).toBe('block');
        expect(node.html.find('> div.children').css('display')).toBe('none');
      });

    });

  });

});