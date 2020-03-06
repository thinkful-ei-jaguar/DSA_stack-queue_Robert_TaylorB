class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
    
}
/*class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}*/
class stack{
    constructor(){
        this.top=null;
    }
    push(data){
        if(this.top===null){
            this.top= new _Node(data,null)
            return this.top
        }
        const newtop=new _Node(data,this.top);
        this.top = newtop;
    }
    pop(){
        let oldtop = this.top;
        this.top=this.top.next;
        return oldtop.data
    }
}
function peek(Stack){
    return Stack.top;
}
function isEmpty(Stack){
    if(Stack.top!==null){
        return false
    }else{
        return true
    };
}
function display(stack){
    let tempstack =stack.top;
    while(tempstack!==null){
        console.log(tempstack.data);
        tempstack=tempstack.next;
    }
}
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const checkstack=new stack();
    for(let i=0;i<s.length;i++){
        checkstack.push(s[i]);
    }
    for(let j=0;j<s.length;j++){
        let singleletter=checkstack.pop();
        if(singleletter!==s[j]){
            return false
        }
    }
    return true;
}








class _NodeQueue {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _NodeQueue(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue() {
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}







function main(){
const starTrek= new stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
console.log(starTrek);
console.log(peek(starTrek));
console.log(isEmpty(starTrek));
display(starTrek);
starTrek.pop();
console.log(starTrek.pop());
console.log("pop twice McCoy gone")
display(starTrek);
console.log(is_palindrome("dad"));


}


main();
