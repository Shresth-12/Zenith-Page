// components/Box.jsx
export function Box({ title, content }) {
    return (
      <div className="md:pl-28 text-white md:w-[1370px] w-[380px]">
        <div className="md:font-[400] md:text-[24px] font-[700] text-[20px] pl-8">{title}</div>
        <div className="md:font-[400] md:text-[20px] md:pt-10 font-[400] text-[14px] pl-6 pt-4">{content}</div>
      </div>
    );
  }
  