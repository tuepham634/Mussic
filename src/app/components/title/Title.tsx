/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Title (props: {
    text:string,
    className?:string
}){
    const {text,className="" } =props;
    return(
        <>
         <div className={"text-[24px] font-[700] text-[#EFEEE0] mb-[20px] capitalize " + className}>{text}</div>
        </>
    );
}