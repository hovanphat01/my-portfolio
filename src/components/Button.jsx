function Button({ label, icon ,variant, onClick }) {
  const styleButton ={
    project: "py-3 px-5 border rounded-[10px] bg-gradient-to-r from-logo-blue via-logo-purple-mid to-logo-purple text-gray-300 transition-opacity duration-300 hover:opacity-80",
    CV:"py-3 px-5 border border-gray-300 rounded-[10px]  text-gray-700 hover:bg-gray-200 transition duration-300",
    default: "py-3 px-5 border rounded-[10px] bg-gray-500 hover:bg-gray-600 text-white",
  }
  const sourceIcon = {
    rocket:"/src/assets/icons/icon-rocket.svg",
    download:"/src/assets/icons/icon-download.svg",
    default:""
  }
  const selectIcon = sourceIcon[icon] || sourceIcon.default
  const selectButton = styleButton[variant] || styleButton.default

  return (<button className={`${selectButton} flex gap-3 items-center cursor-pointer shadow`} onClick={onClick}>
      <div
        className="bg-current h-[20px] w-[20px]"
        style={{
           mask: `url(${selectIcon}) center/contain no-repeat`,
            WebkitMask:
                `url(${selectIcon}) center/contain no-repeat`,
        }}
      ></div>
      {label}
    </button>
  )
}

export default Button;
