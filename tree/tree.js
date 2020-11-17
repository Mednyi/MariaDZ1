'use strict';
const dictionary = ['Правда', 'Привет', 'Риск', 'Рисунок'];
class Node {
    constructor(data, children) {
        this.data = data || null;
        this.children = children || [];
    }
    addChild (node) {
        this.children.push(node)
    }
}
let tree = new Node();
let currentNode = tree;
const loadWord =  (word, node) => {
    for(let i = 0; i < word.length; i++) {
        const dupNode = node.children.find(node => node.data === word[i])
        if(dupNode === undefined) {
            const newNode = new Node(word[i]);
            node.addChild(newNode);
            node = newNode;
        } else {
            node = dupNode;
        }
    }
}
const loadDictionary = dictionary => {
    for (let word of dictionary) {
        loadWord(word, tree);
    }
}
const observeTreeNode = function obsTree (node, str, first) {
    if(node.data !== null && !first) str += node.data;
    if(node.children.length) {
        for (let childNode of node.children) {
            obsTree(childNode, str, false);
        }
    } else {
        console.log(str);
    }
}
const findNode = (input, node) => {
    for(let i = 0; i < input.length; i++) {
        const dupNode = node.children.find(node => node.data === input[i])
        if(dupNode === undefined) {
            return ''
        } else {
            node = dupNode;
        }
    }
    return node
}
const T9 = function t9rec (tree, input) {
    const t9Node = findNode(input, tree);
    observeTreeNode(t9Node, input, true);
}
