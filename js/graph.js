/**
 * Declare global variables for recursive usage.
 */
var processed = [],
    emptyGraph,
    potential = [],
    stableGraph;

function convertToAdjList(links) {
  var list = [];
  links.forEach(function (link) {
    var s = link.source.index;
    var t = link.target.index;
    if (!list[s]) {
      list[s] = [];
    }
    list[s].push(t);

    if (!list[t]) {
      list[t] = [];
    }
    list[t].push(s);
  });
  return list;
}

/**
 * Get B-Stable Subgraph
 */
function SBS(graph) {
  if (!isKn(graph)) {
    potential = sortDesc(graph);
    potential.forEach(function(node) {
      emptyGraph = [];
      Potential(node, node);
      if (stableGraph.length != potential.length) {
        potential = SBS(stableGraph);
      }
    });
  }
  return stableGraph;
}

/**
 * Get potential B-stable subgraph.
 */
function Potential(x, y, graph) {
  var notGamma = notGamma(x, graph);
  notGamma.forEach(function (z) {
    if (Gamma(x, graph).length == Gamma(z, graph).length) {
      emptyGraph.push(z);
    }
  });
  if (emptyGraph.length == 0) {
    emptyGraph.push(y);
  }
  var gamma = Gamma(y, graph);
  gamma.forEach(function(z) {
    if(processed.indexOf(z) == -1 && Gamma(z, graph).length <= Gamma(x, graph).length) {
      processed.push(z);
      stableGraph.push(z);
      Potential(x, z, stableGraph);
    }
  });
}

/**
 * Check if graph is complete
 * @param graph as adjacency list.
 *
 * @returns boolean
 */
function isKn(graph) {
  var isKn = true;
  graph.forEach(function(adjacency){
    if (adjacency.length != graph.length -1) {
      isKn = false;
    }
  });
  return isKn;
}

/**
 * Sort graph based on adjacency of vertexes in descending order.
 *
 * @param graph
 * @returns sorted graph
 */
function sortDesc(graph) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < graph.length - 1; i++) {
      if (graph[i].length < graph[i + 1].length) {
        var temp = graph[i];
        graph[i] = graph[i + 1];
        graph[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return graph;
}

/**
 * Get adjacency list of a vertex.
 * @param x
 * @param graph
 * @returns array of adjacent vertices.
 */
function Gamma(x, graph) {
  var gamma = [];
  if(graph[x]) {
    gamma = graph[x];
  }
  return gamma;
}

/**
 * Get vertices that are not adjacent to x.
 *
 * @param x
 * @param graph
 * @returns array of not adjacent vertices.
 */
function notGamma(x, graph) {
  var notGamma = [];
  graph.forEach(function(node){
    if (graph[x].indexOf(node) == -1) {
      notGamma.push(node);
    }
  });
  return notGamma;
}