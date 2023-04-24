export default function Absolute({ children, className, style }) {
  return (
    <div style={style} className={`${className} absolute top-0 w-full h-full overflow-hidden `}>
      {children}
    </div>
  );
}
