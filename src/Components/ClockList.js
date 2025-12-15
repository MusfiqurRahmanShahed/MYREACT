import Clock from './Clock';

export default function ClockList({ cnt = [] }) {
    return (
        <>
            <div>
                {cnt.map((key) => (
                    <Clock key={key} />
                ))}
            </div>
        </>
    );
}
