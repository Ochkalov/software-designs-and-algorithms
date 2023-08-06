import { IWeightedGraph } from "./IWeightedGraph";
import { Vertex } from "./Vertex";
import { WeightedGraph } from "./WeightedGraph";
import { Dijkstra } from "./dijkstra";
import { Edge } from "./edge";

const vertex1 = new Vertex('1');
const vertex2 = new Vertex('2');
const vertex3 = new Vertex('3');
const vertex4 = new Vertex('4');
const vertex5 = new Vertex('5');

const vertices = [
  vertex1,
  vertex2,
  vertex3,
  vertex4,
  vertex5,
];

const edges = [
  new Edge(vertex1, vertex4, 3),
  new Edge(vertex1, vertex2, 5),
  new Edge(vertex1, vertex3, 4),
  new Edge(vertex2, vertex4, 6),
  new Edge(vertex2, vertex3, 5),
];

const graph: IWeightedGraph = new WeightedGraph();

vertices.forEach(verticle => graph.addVertex(verticle));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

const dijkstra = new Dijkstra(graph.graph)

console.log(dijkstra.findAllShortestPaths(vertex1))
console.log(dijkstra.findShortestPath(vertex1, vertex2))