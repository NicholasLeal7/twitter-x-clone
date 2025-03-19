import './Button.scss';

type Props = {
    label: string,
    size: 'sm' | 'md' | 'lg',
    onClickButton?: () => void,
}
export const Button = ({ label, size, onClickButton }: Props) => {
    return (
        <div
            className={`btn-default ${size}`}
            onClick={onClickButton}
        >
            {label}
        </div>
    );
};