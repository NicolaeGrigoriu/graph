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

function getBSS(graph) {
  console.log(graph);
  return graph;
}
