import io from "socket.io-client";
import { SOCKET_URL } from '@env';

const authSocket = io(`${SOCKET_URL}/auth`);
let tasksSocket;

export const USER_TOKEN = 'cpc-todi-token'; // locator on local storage

const EVENTS = {
    connection:'connect',
    disconnection:'disconnect',
    connection_error:"connect_error",
    reconnect_attempt:"reconnect_attempt",
    reconnect:"reconnect",

    // Custom events
    create_account:'create_account',
    signin_account:'signin_account',
    create_task:'create_task',
    update_task:'update_task',
    delete_task:'delete_task',
    subscribe:'subscribe',

    // Outward event
    tasks_update:"tasks_update",
    remove_task:"remove_task",
    clear_completed_task:"clear_completed_task",
}


authSocket.on(EVENTS.connection,(socket)=>{
    console.log("Connected to server");
})

authSocket.on(EVENTS.connection_error,(error)=>{
    console.log("Error",error.message)
    console.log("Error connecting to server");
});

// authSocket.on(EVENTS.reconnect_attempt,(socket)=>{
//     console.log("Reconnecting...", `${SOCKET_URL}/auth`);
// });

// authSocket.on(EVENTS.reconnect,(socket)=>{
//     console.log("Reconnected.");
// });

export const authenticate = (data, mode, cb)=>{
    // Mode is either 'signin', 'signup'
    // Data for signin include username/email, password
    // Data for signup include username, email, password

    // Send for create account and signin_account
    if (mode === 'signup') {
        authSocket.emit(EVENTS.create_account, data, (res)=> {
            cb(res);
        });
    }

    else if (mode === 'signin') {
        authSocket.emit(EVENTS.signin_account, data, (payload)=> {
            cb(payload);
            // Disconnect
            // authSocket.disconnect();
            
        });
    }
}


export const createTaskSocket = (token, cb) =>{

    tasksSocket = io(`${SOCKET_URL}/task`, { auth: { token }});

    tasksSocket.on(EVENTS.connection, ()=>{
        // console.log("Task socket Connected");

        tasksSocket.emit(EVENTS.subscribe, (payload)=>{
            const { data:tasks } = payload; // data is all the user's tasks

            cb(tasks);
        });
    })

}

export const createTodo = (task, cb) =>{
    // Create task is done on window load, so taskSocket is initialized
    const data = {
        task,
        platform:'mobile',
    }

    tasksSocket.emit(EVENTS.create_task, data, (payload)=> {
        cb(payload);
    });
}

export const updateTodo = (task, cb) =>{
    // Create task is done on window load, so taskSocket is initialized

    const data = {
        ...task,
        platform:'mobile',
    }

    tasksSocket.emit(EVENTS.update_task, data, (payload)=> {
        // console.log("Updated task:", payload);
        cb(payload);
    });
}

export const deleteTodo = (task_id, cb) =>{
    // Delete task
    tasksSocket.emit(EVENTS.delete_task, task_id, (payload)=> {
        cb(payload);
    });
}

export const clearCompletedTodo = (cb) =>{
    // Delete completed tasks

    tasksSocket.emit(EVENTS.clear_completed_task, (payload)=> {
        cb(payload);
    });
}