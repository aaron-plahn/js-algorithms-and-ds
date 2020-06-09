'use strict';
class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(key){
        if(!this.adjacencyList[key]) this.adjacencyList[key] = []; // must add edges separately
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v =>{
            v !== vertex2;
        });
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=>{
            v !== vertex1;
        });
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length0){
            const adjacentVertex = this.adjacencyList.pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstSearch(startingVertex){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;
        (function depthFirstVisit(vertex){
            if(vertex ===  null) return null;
            visited[vertex] = true;
            result.push(vertex);
            let adjacentVertices = adjacencyList[vertex];
            for(let adjacentVertex of adjacentVertices){
                if(!visited[adjacentVertex]) depthFirstVisit(adjacentVertex);
            }
        })(startingVertex);
        return result;
    }

    breadthFirstSearch(startingVertex){
        let q = [startingVertex]; // Use array as queue
        let result = [];
        let visited = {
            startingVertex: true
        };

        while(q.length){
            let currentVertex = q.shift(); // dequeue
            result.push(currentVertex);
            // console.log(`Adjacency list for ${currentVertex}: ${this.adjacencyList[currentVertex]}`);
            for(let neighbor of this.adjacencyList[currentVertex]){
               // console.log(`Handling neighbor: ${neighbor} of ${currentVertex}`);
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    q.push(neighbor); // enqueue
                }
            }
        }
        return result;
    }
}
let g = new Graph();
g.addVertex(3);
g.addVertex(2);
g.addVertex(5);
g.addVertex(1);
g.addVertex(4);
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(2,4);
g.addEdge(4,5);
console.log(`Depth First Search : ${g.depthFirstSearch(3)}`);
console.log(`Breadth First Search: ${g.breadthFirstSearch(3)}`);