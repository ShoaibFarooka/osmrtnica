export const Button = (prop) => {
  console.log(prop);
  return (
    <button
      className={`border-white ${prop.padding} ${prop.px} md:text-[16px] shadow-lg rounded-lg bg-gradient-to-r ${prop.bg1} ${prop.bg2} hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 border-2 ${prop.style}`}
      style={{ boxShadow: " 5px 5px 5px #c2c2c280" }}
    >
      {prop.children}
    </button>
  );
};

export const SimpButton = (props) => {
  return (
    <button
      className={`${props.padding} flex ${props.px} shadow-lg rounded-lg ${props.bgColor} gap-1 text-${props.color} hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500`}
    >
      {props.children}
    </button>
  );
};

export const Button2 = (props) => {
  return (
    <button
      className={` italic bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] border-1 border-[#C3C6C8] rounded-[2px]  text-[14px] font-[800] text-gray-800 ${props.styles}`}
    >
      {props.children}
    </button>
  );
};
