class Todo {
    id: string;
    text : string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString()
    }
}


class Num{
    x: number;
    y : number;
    constructor(x:number,y:number){
        this.x = x
        this.y = y

    }
}

class Name{
    name! : string
}
const name  = new Name()
name.name = 'ajsica'
export default Todo;