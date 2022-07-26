import clNames from './Button.module.css';

const Button = (props) => {
    return <div>
        <button className={clNames.addPostButton} onClick={props.onClick}>{props.content}</button></div>
}

export default Button;