import '@/app/delete-task/delete-task.styles.scss'
import { Modal } from '@/components/modal'
import { useTasks } from '@/contexts/tasks.context'

type DeleteTaskProps = {
  isDelete: string
}
export function DeleteTask({ isDelete }: DeleteTaskProps) {
  const { cancel, deleteTask } = useTasks()
  return (
    <Modal>
      <h1 className="delete-task-title">Deletar tarefa</h1>
      <text className="delete-text">
        Tem certeza que você deseja deletar essa tarefa?
      </text>
      <div className="delete-task-container-button">
        <button className="delete-task-button cancel" onClick={cancel}>
          <span>Cancelar</span>
        </button>
        <button
          className="delete-task-button delete"
          onClick={() => deleteTask(isDelete)}
        >
          <span>Deletar</span>
        </button>
      </div>
    </Modal>
  )
}
