import { v4 as uuidv4 } from 'uuid';
import type {NextApiRequest,NextApiResponse} from 'next';

type TodoType={id:string, name:string, isDone:boolean};

let todos=[
    {
        id:uuidv4(),
        name:"Learn next api.js",
        isDone:false,
    },
    {
        id:uuidv4(),
        name:"Learn HTML api",
        isDone:false,
    },
    {
        id:uuidv4(),
        name:"Start new sideproject api",
        isDone:false,
    }
];


export const addTodo=(name:string)=>{
    let newTodo = {
        id:uuidv4(),
        name:name,
        isDone:false,
    }
    todos.push(newTodo);
};

export const deleteTodo=(id:string)=>{
    todos = todos.filter((todo)=>{
        return todo.id !== id;
    });
}

export const updateTodo=(id:string,isDone:boolean)=>{
    todos.forEach((obj,i)=>{
        if(obj.id === id)
        {
            obj.isDone = isDone;;
            todos[i]=obj;
        }
    })
}

export const updateTodo1 = ({ id, isDone }:{
    id:string,
    isDone:boolean
}) => {
    todos.forEach((obj,i)=>{
        if(obj.id === id)
        {
            obj.isDone = isDone;;
            todos[i]=obj;
        }
    })
  };

export default function handler(
    req:NextApiRequest,
    res:NextApiResponse<{todos:TodoType[]}>
){
    res.status(200).json({todos});
}