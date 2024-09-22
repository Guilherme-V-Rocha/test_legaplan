'use client'

import '@/app/page.styles.scss'
import { Button } from '@/components/button'
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
        <Button className="page-task-button" onClick={() => setIsAdd(true)}>
          <span>Adicionar nova Tarefa</span>
        </Button>
        {isAdd && isDelete === undefined && <AddTask />}
        {isDelete !== undefined && <DeleteTask isDelete={isDelete} />}
      </div>
    </div>
  )
}
