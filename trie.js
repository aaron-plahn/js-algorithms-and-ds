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

    autoComplete(prefix){
        let current = this.root;
        let autoCompletionOptions = [];
        // 0 -> root (does not correspond to letter)
        // 1-> first letters
        for(let i=0; i<prefix.length; i++){
            let currentChar = prefix.charAt(i);
            current = current.children[currentChar];
            if(!current) return null;
        }
        // current should now be the node corresponding to the end of start (prefix)
        let results = []; // autocomplete candidates to return
       // console.log(`Getting autocompletion options for prefix ${prefix}`);
        autoCompleteHelper(prefix,current);
        function autoCompleteHelper(currentString, node){
            let keys = Object.keys(node.children);
            if(!keys.length) return;
            keys.forEach((key,index)=>{
                let updatedString = currentString + key;
                if(node.children[key].endOfWord) results.push(updatedString);
                autoCompleteHelper(updatedString,node.children[key]);
            })
        }
        return results;
    }

    getAllWords(){
        return this.autoComplete("");
    }
}

let t = new Trie();
t.insert("bat");
t.insert("bob");
t.insert("ball");
t.insert("baller");
t.insert("total");
t.insert("tot");
t.insert("tom");
t.insert("tape");
t.insert("cock");
console.log(`Trie contains the word bob: ${t.search("bob")}`);
console.log(`Trie contains the word bobby: ${t.search("bobby")}`);
t.insert("bobby");
console.log(`Deleted the word bob: ${t.delete("bob")}`);
console.log(`Trie contains the word bob: ${t.search("bob")}`);
console.log(`Trie contains the word bobby: ${t.search("bobby")}`);
console.log(`t.autoComplete("b"): ${t.autoComplete("b")}`);
console.log(`t.autoComplete("ba"): ${t.autoComplete("ba")}`);
console.log(`t.autoComplete("t"): ${t.autoComplete("t")}`);
console.log(`t.autoComplete("ta"): ${t.autoComplete("ta")}`);
console.log(`t.autoComplete("f"): ${t.autoComplete("f")}`);
console.log(`t.getAllWords(): ${t.getAllWords()}`);