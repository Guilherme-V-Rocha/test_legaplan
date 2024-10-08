import { Checkbox } from '@/app/list/checkbox'
import '@/app/list/list.styles.scss'
import { useTasks } from '@/contexts/tasks.context'
import { TaskData } from '@/data/tasks'
import DeleteIcon from '@/images/icons/deleteIcon.svg'
import { createStyleWithCustomProps } from '@/util/style-custom'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type ListProps = {
  task: TaskData
}

export function List({ task }: ListProps) {
  const { setIsDelete, tasksCompleted } = useTasks()
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = useCallback(
    (value: boolean) => {
      setChecked(value)
      tasksCompleted(task.id, value)
    },
    [task.id, tasksCompleted]
  )

  const confirmTaskChecked = useCallback(() => {
    if (task.checked) setChecked(task.checked)
    else setChecked(false)
  }, [task.checked])

  useEffect(() => {
    confirmTaskChecked()
  }, [confirmTaskChecked])

  return (
    <div className="list">
      <div>
        <Checkbox value={checked} isChecked={handleCheckboxChange} />
        <text
          className="nameList"
          style={createStyleWithCustomProps({
            '--text-decoration': checked ? 'line-through' : undefined,
            '--opacity': checked ? '54%' : undefined,
          })}
        >
          {task.name}
        </text>
      </div>
      <Image
        src={DeleteIcon}
        alt="delete icon"
        onClick={() => setIsDelete(task.id)}
      />
    </div>
  )
}
