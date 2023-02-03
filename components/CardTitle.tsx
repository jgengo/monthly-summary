import { CardTitleProps } from './types'

export default function CardTitle({ title, completedTasks }: CardTitleProps) {
  return (
    <div className="mt-8 px-5 text-xl font-bold w-full bg-[#fd0]/70 p-2 h-15 flex justify-between items-center">
      <p className="tracking-wide capitalize">{title}</p>
      <div className="text-xs font-normal">tasks completed: {completedTasks}</div>
    </div>
  );
}
