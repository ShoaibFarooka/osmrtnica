export const Button = (prop) => {
  console.log(prop);
  return (
    <button
      className={`border-white ${prop.padding} ${prop.px} shadow-lg rounded-lg bg-gradient-to-r from-${prop.bg1} to-${prop.bg2} hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 border-2`}
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
      className={` italic bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] border-1 border-gray-300 rounded-sm px-2 text-[12px] font-semibold text-gray-800 ${props.styles}`}
    >
      {props.children}
    </button>
  );
};
