'use strict';
class TrieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let current = this.root;
        for(let i=0; i<word.length; i++){
            let currentChar = word.charAt(i);
            let node = current.children[currentChar];
            if(!node){
                node = new TrieNode(currentChar);
                current.children[currentChar] = node; // attach child node for given char
            } 
            current = node;
            debugger;
        }
        current.endOfWord = true; // for loop terminates with current === last character of word
    }

    search(word){
        let current = this.root;
        // loop down tree
        for(let i=0; i<word.length; i++){
            let currentChar = word.charAt(i);
            let node = current.children[currentChar];
            debugger;
            if(!node) return false;
            current = node;
        }
        return current.endOfWord;
    }
}

let t = new Trie();
t.insert("bat");
t.insert("bob");
t.insert("ball");
t.insert("tom");
console.log(`Trie contains the word bob: ${t.search("bob")}`);
console.log(`Trie contains the word bobby: ${t.search("bobby")}`);