type HeaderProps = {
  title?: string;
  tag?: string;
}

export default function Header({title, tag}: HeaderProps) {
  return (
    <div className="bg-black text-white p-2 rounded-2xl">
      <span className="font-bold text-lg">{title}</span>
      <span className="text-sm ml-2">{tag}</span>
    </div>
  )
}