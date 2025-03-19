import './Textarea.scss';

type Props = {
    placeholder: string;
    rows: number;
    value: string;
    onChange: (text: string) => void;
}
export const Textarea = ({ placeholder, rows, value, onChange }: Props) => {
    return (
        <div className='textarea'>
            <textarea placeholder={placeholder} rows={rows} value={value} onChange={evt => onChange(evt.target.value)}></textarea>
        </div>
    );
};