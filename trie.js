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
        }
        current.endOfWord = true; // for loop terminates with current === last character of word
    }

    search(word){
        let current = this.root;
        // loop down tree
        for(let i=0; i<word.length; i++){
            let currentChar = word.charAt(i);
            let node = current.children[currentChar];
            if(!node) return false;
            current = node;
        }
        return current.endOfWord;
    }

    delete(word){
        this.deleteRecursively(word,this.root,0);
    }

    deleteRecursively(word,current,index){
        debugger;
        if(index === word.length){
            if(!current.endOfWord) return false;
            current.endOfWord = false; // delete word if it was there
            return Object.keys(current.children).length === 0;
        }
        let currentChar = word.charAt(index);
        let node = current.children[currentChar];
        if(!node) return false;
        let shouldDeleteCurrentNode = this.deleteRecursively(word,node,index+1);
        if(shouldDeleteCurrentNode){
            delete current.children[currentChar];
            return Object.keys(current.children).length === 0;
        }
        return false;
    }
}

let t = new Trie();
t.insert("bat");
t.insert("bob");
t.insert("ball");
t.insert("tom");
console.log(`Trie contains the word bob: ${t.search("bob")}`);
console.log(`Trie contains the word bobby: ${t.search("bobby")}`);
t.insert("bobby");
console.log(`Deleted the word bob: ${t.delete("bob")}`);
console.log(`Trie contains the word bob: ${t.search("bob")}`);
console.log(`Trie contains the word bobby: ${t.search("bobby")}`);
