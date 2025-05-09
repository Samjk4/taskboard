'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function  TaskDetail({params}) {
    const router = useRouter();
    const{ id } = params;
    const [tittle, setTittle] = useState('');
    const [description, setDescription] =useState('');

    const handleSave = () => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = savedTasks.map((tasks) =>
            task.id === Number(id) ? {...task,tittle,description} : task
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        router.push('/');
    }
    
    useEffect(() => {
        const savedTask = JSON.parse(localStorage.getItem('tasks')) || [];
        const task = savedTask.find((t) => t.id === Number(id));
        if(task){
            setTittle(task.tittle);
            setDescription(task.description);
        }
    },[id]);

    return (
        <main className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Task Details
            </h1>
            <input
                className="border p-2 w-full mb-2"
                value={tittle}
                onChange={(e)=> setTittle(e.target.value)}
                placeholder="Tittle"
            />
            <textarea
                className="border p-2 w-full mb-4"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                placeholder="Description"
                rows={4}
            />

            <button
                className="bg-green-500 text-white px-4 py-2"
                onClick={handleSave}
            >
                Save
            </button>
        </main>
    )
}