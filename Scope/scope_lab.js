//Global Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    //Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

//Global Scope
console.log(globalVar);    //Output: "I'm a global variable"
console.log(globalLet);    //Output: "I'm also global, but scoped with let"
console.log(globalConst);  //Output: "I'm a global constant"

//Block scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    var functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

//console.log(functionVar);    //Throws ReferenceError
//console.log(functionLet);    //Throws ReferenceError
//console.log(functionConst);    //Throws ReferenceError

//Re-assignement and re-declaration

{
    var blockVarInit = "I'm a block-scoped initial var";
    let blockLetInit = "I'm a block-scoped initial let";
    const blockConstInit = "I'm a block-scoped initial const";

    console.log(blockVarInit);    
    console.log(blockLetInit);    
    console.log(blockConstInit); 

    var blockVarInit = "Now, I'm block-scoped, 2nd var value";
    blockLetInit = "Now, I'm block-scoped, 2nd let value";
    //pblockConstInit = "Now, I'm block-scoped, 2nd const value";

    console.log(blockVarInit);    
    console.log(blockLetInit);    
    //console.log(blockConstInit);    
}
    var blockVarInit = "Now, I'm outside block, 2nd var value";
    let blockLetInit = "Now, I'm outside block, 2nd let value";
    blockConstInit = "Now, I'm outside block, 2nd const value";

    console.log(blockVarInit);    
    console.log(blockLetInit);    
    console.log(blockConstInit);    
