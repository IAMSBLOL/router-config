const Footer = () => {
  return (

    <footer>
      <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="flex flex-col items-baseline space-y-6">
          <div className="mx-auto">
            <a href="/"
              className="mx-auto text-lg text-center">
                        ❖
            </a>
          </div>
          <div className="mx-auto"
            x-data="{ year: new Date().getFullYear() }">
            <span className="mx-auto mt-2 text-sm font-medium text-gray-500">
                        Copyright © <span x-text="year">2024</span>
              <a aria-label="Michael Andreuzza"
                href="#_"
                className="mx-2 text-blue-500 hover:text-gray-500">michael andreuzza</a>
                        Since 1985
            </span>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
