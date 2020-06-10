'use strict';
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(value,priority){
        this.values.push({value,priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b)=>{
           return a.priority - b.priority;
        })
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});

    }

    dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // return value

        // initialize state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
            }else{
                distances[vertex] = Infinity;
            }
            nodes.enqueue(vertex,distances[vertex]);
            previous[vertex] = null;
        }

        while(nodes.values.length){
            let currentNodeValue = nodes.dequeue().value; // smallest distances node (value only not entire object)
            if(currentNodeValue === finish){
                // build up path by working backwards from previous
                while(currentNodeValue){
                    path.push(currentNodeValue);
                    currentNodeValue = previous[currentNodeValue];
                }
                break;
            }
            if(currentNodeValue || distances[currentNodeValue] !== Infinity){
                for(let neighbor in this.adjacencyList[currentNodeValue]){
                    let nextNode = this.adjacencyList[currentNodeValue][neighbor];
                    // calculate distances to neighboring node
                    let candidate = distances[currentNodeValue] + nextNode.weight;
                    if(candidate<distances[nextNode.node]){
                        // update smallest distance to neighbor
                        distances[nextNode.node] = candidate;
                        // update path to neighbor
                        previous[nextNode.node] = currentNodeValue;
                        // enqueue nextNode with new priority
                        nodes.enqueue(nextNode.node,candidate);
                    }
                }
            }
        }
        return path.reverse();
    }
}

let q = new PriorityQueue();
q.enqueue("A",3);
q.enqueue("B",7);
q.enqueue("C",2);
q.enqueue("D",0);
q.enqueue("E",5);
console.log(q.values);
while(q.values.length){
    let currentNode = q.dequeue();
    console.log(`Dequeue: ${currentNode.value}: ${currentNode.priority}`);
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B",4);
g.addEdge("A","C",2);
g.addEdge("B","E",3);
g.addEdge("C","D",2);
g.addEdge("C","F",4);
g.addEdge("D","E",3);
g.addEdge("D","F",1);
g.addEdge("E","F",1);

console.log(`Shortest path from A to F: ${g.dijkstra("A","E")}`);