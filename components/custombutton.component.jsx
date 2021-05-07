const CustomButton = ({title,classextend}) =>{
  return (<button class={`duration-500 rounded-lg text-sm font-semibold px-6 py-2 ${classextend || ""}`}>{title}</button>)
}

export default CustomButton;
