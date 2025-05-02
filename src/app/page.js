'use client';
// 'use client' 是 Next.js 的指令，表明這是客戶端組件
// 在客戶端組件中，我們可以使用 React hooks 和瀏覽器 API

import TaskList from "../components/TaskList";
import Image from "next/image";  // Next.js 提供的圖片優化組件
import { useState } from "react"; // React 的 useState hook 用於管理組件狀態

// 默認導出的 Home 組件是此頁面的主要組件
// 在 Next.js 的 App Router 中，page.js 文件自動成為路由頁面
export default function Home() {
  // 使用 useState Hook 來管理狀態
  // tasks 數組用於存儲所有任務
  // setTasks 是更新 tasks 的函數
  const [tasks, setTasks]=useState([]);
  
  // newTask 用於存儲輸入框的當前值
  // setNewTask 用於更新輸入框的值
  const[ newTask , setNewTask ]=useState('');

  // addTask 函數處理添加新任務的邏輯
  const addTask=()=>{
    console.log("Before=",tasks);
    console.log("NewTask:",tasks);
    // 使用展開運算符(...) 創建一個新數組，包含所有現有任務和新任務
    // React 中的狀態更新應該是不可變的，所以我們創建新數組而不是修改原數組
    const updatedTask=[...tasks,newTask ];
    setTasks(updatedTask);
    console.log("After",updatedTask);
  };
  
  // 組件的渲染邏輯
  // 在 React 中，return 後面的 JSX 描述了組件的 UI 結構
  return (
    // main 標籤包含整個頁面內容
    // className 使用了 Tailwind CSS 的工具類來設置樣式
    <main className="p-4">
      <h1 className="text-2xl font-bold">Task Board</h1>
      {/* 輸入區域的容器，使用 flex 佈局 */}
      <div className="flex gap-2 mb-4">
        {/* 
          受控輸入組件：
          - value 綁定到 newTask 狀態
          - onChange 事件處理器更新 newTask 狀態
        */}
        <input
          className="border p-2 flex-1"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e)=> setNewTask(e.target.value)}
        />
        {/* 
          添加按鈕：
          - onClick 事件綁定到 addTask 函數
          - 使用 Tailwind CSS 設置樣式
        */}
        <button
          className="bg-blue-500 text-white px-4"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      {/* 
        TaskList 是一個子組件
        將 tasks 數組作為 props 傳遞給它
        這展示了 React 組件之間的數據傳遞
      */}
      <TaskList tasks={tasks}/>
    </main>
  );
}
