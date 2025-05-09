'use client';

import Link from 'next/link';
// TaskList 是一個子組件，接收 tasks 數組作為 props
// 在 React 中，props 是從父組件向子組件傳遞數據的方式
export default function TaskList({tasks}) {
    // 返回的 JSX 結構定義了任務列表的外觀
    return (
        // ul 元素使用 Tailwind CSS 的 space-y-2 類來設置列表項之間的間距
        <ul className="space-y-2">
            {/* 
              使用 Array.map() 方法將 tasks 數組轉換為 JSX 元素數組
              - map 是 React 中常用的列表渲染方式
              - 每個 task 都被轉換為一個 li 元素
            */}
            {tasks.map((task)=> (
                // 每個列表項都需要一個唯一的 key 屬性
                // key 幫助 React 高效地更新 DOM
                <li
                  key={task.id}
                  className="border p-2 rounded flex justify-between items-center"  // 使用 Tailwind CSS 設置樣式
                >
                    <Link 
                        href={`/task/${task.id}`}
                        className="text-blue-600 hover:underline"
                        >
                            {task.tittle}
                    </Link>
                    <button
                        className="text-red-500"
                        onClick={()=> onDelete(task.id)}
                        >
                            Delete
                        </button>
                    {/* 顯示任務文本 */}
                
                </li>
            )) }
        </ul>
    )
}