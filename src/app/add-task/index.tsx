import '@/app/add-task/add-task.styles.scss'
import { Modal } from '@/components/modal'
import { useTasks } from '@/contexts/tasks.context'
import { useState } from 'react'

export function AddTask() {
  const { cancel, addTask } = useTasks()
  const [title, setTitle] = useState<string>()
  return (
    <Modal top="28%">
      <h1 className="add-task-title">Nova tarefa</h1>
      <label htmlFor="title" className="label-title">
        <text className="title">Título</text>
        <div className="add-task-input-root">
          <input
            value={title}
            placeholder="Digite"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </label>
      <div className="add-task-container-button">
        <button className="add-task-button cancel" onClick={cancel}>
          <span>Cancelar</span>
        </button>
        <button className="add-task-button add" onClick={() => addTask(title)}>
          <span>Adicionar</span>
        </button>
      </div>
    </Modal>
  )
}
