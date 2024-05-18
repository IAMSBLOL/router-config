const Content = (properties:{children:React.ReactNode}) => {
  const { children } = properties
  return (
    <div className="flex-1 h-full">
      <div className="h-14 w-full"></div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default Content
