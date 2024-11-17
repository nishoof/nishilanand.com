import Image from 'next/image';
import style from '@/app/(home)/style.module.css';

export default function Location() {
    const LocationIcon = () => {
        return (
            <Image
                priority
                src="/images/location-pin.svg"
                alt="location icon"
                width="25"
                height="25"
                draggable={false}
            />
        )
    };

    return (
        <div className={`${style.meLocation} ${style.me}`}>
            <LocationIcon />
            <span>San Francisco, CA</span>
        </div>
    );
}