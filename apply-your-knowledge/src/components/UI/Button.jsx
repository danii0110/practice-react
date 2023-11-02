import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
//TODO: 버튼 라인 수정
