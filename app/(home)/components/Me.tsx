import style from '@/app/(home)/style.module.css';
import ConnectIcons from '@/app/(home)/components/ConnectIcons';
import Location from '@/app/(home)/components/Location';

export default function Me() {
    return (
        <div style={{ marginBottom: 20 }}>
            <ConnectIcons />

            <h1 className={style.me}>Nishil Anand</h1>

            <Location />

            <p className={style.me}>I&apos;m a student at the University of San Francisco majoring in Computer Science!</p>
        </div>
    );
}