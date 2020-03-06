class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
    
}

class stack {
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


function matchingParens (string) {
string = string.replace(/[^a-zA-Z0-9()+/*\-]/g, "");
    const checkStack = new stack ()
    for (let i = 0; i < string.length; i++) {
        checkStack.push(string[i])
    } 
    let close = ''
    let open = ''
    for (let j=0; j < string.length; j++){
        let singleChar = checkStack.pop();
        if(singleChar === ')') {
            close = singleChar
            console.log(close)
        }
        else if (singleChar === '(' && close != '') {
            open = singleChar
            console.log(open)
            return false
        }
        
    }
    return true
}

function sortStack(pile, tempstack) { // 7 5 6 9 4 1
    let temp = pile.top
    let current = pile.top
    let before=pile.top;
    while(current != null) {
    if (temp.data < current.data ) {
        temp = current.next;
        before = current;
    }
    current = current.next
    }
    tempstack.push(temp)
    before.next=temp.next;

    console.log(tempstack)
    return sortStack(pile, tempstack)
}

function testStack () {
    const testStack = new stack()

    testStack.push(1)
    testStack.push(4)
    testStack.push(9)
    testStack.push(6)
    testStack.push(5)
    testStack.push(7)
    tempstack = new stack()
    sortStack(testStack,tempstack)
}

//testStack()

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
        const newNode = new _NodeQueue(data)
        if(this.first === null) {
            this.first = newNode;
        }
        if(this.last) {
            this.last.next = newNode;
        }

        this.last = newNode
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

        return node.value
    }
}
class _NodeDoubleQueue {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.before = null;
    } 
}
class DoubleQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) { //  1 2 3
        const newNode = new _NodeQueue(data)
        if(this.first === null) {
            this.first = newNode;
            newNode.before =this.first;
        }
        if(this.last) {
            this.last.next = newNode;
            newNode.before=this.last.before;
        }

        this.last = newNode
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

        return node.value
    }
}
class twoStackQueue{
    constructor(){
        this.firstS=new stack();
        this.secondS=new stack();
    }
    enqueue(data) {//1 2 3
        if(this.firstS.top == null){
            firstS.push(data);
            secondS.push(data);
        }
        const newtop=new _Node(data,this.top);
        this.firstS.top = newtop;
    }
    dequeue() {
        let temp = this.firstS.top;
        let before;
        while(temp!==this.secondS.top){
            before=temp;
            temp=temp.next;
        }
        before.next=null;
        this.secondS.top=before;
    }
}

function Bank(num){
    let line= new Queue;
    for(let i=0;i<num;i++){
        let a = Math.random();
        line.enqueue(a)
        //console.log(a)
    }
    let temp = line.first;
    while(line.first!==null){
        if(temp.value < .25){
            line.last.next=temp.next;
            let b = Math.random();
            temp.value=b;
            line.last=temp
            line.last.next=null;
        }else{
            console.log(line.dequeue());
            temp=temp.next;
            //console.log(temp)
        }
    }
}





function stackMain(){
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

    const testString = '4(2 - 3)'
    const otherTest = '4(2 + 3'
    matchingParens(otherTest)

}


//stackMain();

function peek(queue) {
    return queue.first
}

function isEmpty(queue) {
    if (queue.first != null) {
        return false
    }
    return true
}

function display(queue) {
    let tempQueue = queue.first
    while(tempQueue != null) {
        console.log(tempQueue)
        tempQueue = tempQueue.next
    }
}

function queueMain () {
    starTrekQ = new Queue()

    starTrekQ.enqueue("Kirk")
    starTrekQ.enqueue("Spock")
    starTrekQ.enqueue("Uhura")
    starTrekQ.enqueue("Sulu")
    starTrekQ.enqueue("Checkov")
    //peek(starTrekQ)
    //isEmpty(starTrekQ)
    starTrekQ.dequeue()
    starTrekQ.dequeue()
    display(starTrekQ)
    DancersM=new Queue();
    DancersF=new Queue();
    DancersF.enqueue("F Jane")
    DancersM.enqueue("M Frank")
    while(peek(DancersF)||peek(DancersM)){
        if(peek(DancersM)&&peek(DancersF)){
            let a =DancersF.dequeue();
            let b= DancersM.dequeue();
            console.log(`Female dancer is ${a}, and the male dancer is ${b}`)
        }
        else if (!peek(DancersM) && peek(DancersF)){
            console.log(`only Female dancers`)
            break;
        }
        else if (peek(DancersM) && !peek(DancersF)){
            console.log(` only male dancers`)
            break;
        }
    }
    //Bank(10);


}

queueMain()
