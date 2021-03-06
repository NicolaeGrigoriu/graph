<?php print drupal_render_children($form);?>
<svg width="960" height="400" class="graph-canvas" id="graph-svg"></svg>
<div class="d3-info">
<p>
Click in the open space to <strong>add a node</strong>, drag from one node to another to <strong>add an edge</strong>. <br>
Ctrl-drag a node to <strong>move</strong> the graph layout. <br>
Click a node or an edge to <strong>select</strong> it.
</p>
<p>
When a node is selected: <strong>R</strong> toggles reflexivity, <strong>Delete</strong> removes the node. <br>
When an edge is selected: <strong>L</strong>(eft), <strong>R</strong>(ight), <strong>B</strong>(oth) change direction, <strong>Delete</strong> removes the edge.
</p>
</div>
