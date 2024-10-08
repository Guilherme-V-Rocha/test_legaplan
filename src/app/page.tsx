'use client'

import '@/app/page.styles.scss'
import { useTasks } from '@/contexts/tasks.context'
import '@/styles/settings.module.scss'
import { AddTask } from './add-task'
import { DeleteTask } from './delete-task'
import { Header } from './header'
import { Tasks } from './tasks'

export default function Home() {
  const { isAdd, isDelete, setIsAdd } = useTasks()

  return (
    <div>
      <Header />
      <div className="page-container">
        <Tasks />
        <button className="page-task-button" onClick={() => setIsAdd(true)}>
          <span>Adicionar nova Tarefa</span>
        </button>
        {isAdd && isDelete === undefined && <AddTask />}
        {isDelete !== undefined && <DeleteTask isDelete={isDelete} />}
      </div>
    </div>
  )
}
