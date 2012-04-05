describe("Tree", function() {

	describe("Node", function() {

    it("creates a node with its name from JSON", function() {
      var json = {name:'node'};
      var node = new Node(json);
      expect(node instanceof Node).toBe(true);
      expect(node.name).toBe('node');
    });

  });
});