
interface LongTextProps {
  text: string;
  className?: string;
  textStyle?: string;
}

const LongText = ({text, className, textStyle}: LongTextProps) => {
  return (
    <div className={`${className ? className : ''}`}>
      {text.split('\n').map((t: string, index) =>  <p key={index} className={`${textStyle ? textStyle : ''}`}>{t}</p>)}
    </div>
  );
};

export default LongText;