import { createContext, useContext, useEffect, useState, } from "react";
import AuthContext from "./AuthContext";




const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { message, setMessage, user } = useContext(AuthContext);
    const [latestTask, setLatestTask] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [taskList, setTaskList] = useState(null);

    // create task function
    const createTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)

        }
    }
        //update task function
        const updateTask = async (formData) => {
            const config = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
    
            }

        const response = await fetch(` http://localhost:5000/tasks/${formData.id}`, config);
        if (response.ok) {
            setMessage("Task Update Successfully")
            getAllTasks();
            setTimeout(()=>{
                setMessage("");
            },2000)
        }
        else {
            setMessage("Something is wrong,please try again");
        }
    }

    //  get tasks
    const getAllTasks = async () => {
        try {
            const response = await fetch(`http://localhost:5000/tasks?userId=${user.id}`, { method: "Get" })
            if (response.ok) {
                const tasks = await response.json();
                setTaskList(tasks);

                const latest = tasks[tasks.length - 1];
                setLatestTask(latest);


                const recentTasks = tasks.slice(-3);
                setRecentTasks(recentTasks);
                recentTasks.reverse();


            } else {
                alert("something went wrong")
            }

        } catch (err) {
            console.log(err);

        }

    }
    const deleteTask=async()=>{
        try{
        const response =fetch(`http://localhost:5000/task/$(id),{method:"Delete}`);
if(response.ok){
    setMessage("Task deleted successfully");
    getAllTasks();
    setTimeout(()=>{
        setMessage("");
    },3000)
}else{
    setMessage("Something went wrong");

}

}catch(err){
    console.log(err)
}
    }

    useEffect(() => {
        if (user !== null) {
            getAllTasks();
        }
    }, [user])

    return (
        <TaskContext.Provider value={{

            createTask,
            message,
            latestTask,
            recentTasks,
            taskList,
            updateTask,
            deleteTask

        }}>

            {children}
        </TaskContext.Provider>
    )
}
export default TaskContext;