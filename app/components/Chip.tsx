const Chip = ({item, color, textColor}: {item: string, color?: string, textColor?: string}) => {
  return (
    <div className="mb-4">
        <div className={`text-sm inline ${textColor || 'text-gray-500'} font-medium rounded-full px-5 py-2 ${color || 'bg-gray-100'}`}>{item}</div>
    </div>
  )
}

export default Chip;