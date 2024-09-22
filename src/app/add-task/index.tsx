import '@/app/add-task/add-task.styles.scss'
import { Button } from '@/components/button'
import { TextInput } from '@/components/input'
import { Modal } from '@/components/modal'
import { useTasks } from '@/contexts/tasks.context'
import { useState } from 'react'

export function AddTask() {
  const { cancel, addTask } = useTasks()
  const [title, setTitle] = useState<string>()
  return (
    <Modal>
      <h1 className="add-task-title">Nova tarefa</h1>
      <label htmlFor="title" className="label-title">
        <text className="title">Título</text>
        <TextInput.Root>
          <TextInput.Input
            value={title}
            placeholder="Digite"
            onChange={(e) => setTitle(e.target.value)}
          />
        </TextInput.Root>
      </label>
      <div className="add-task-container-button">
        <Button className="add-task-button cancel" onClick={cancel}>
          <span>Cancelar</span>
        </Button>
        <Button className="add-task-button add" onClick={() => addTask(title)}>
          <span>Adicionar</span>
        </Button>
      </div>
    </Modal>
  )
}
