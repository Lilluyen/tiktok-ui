import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '@/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    function handleFallback() {
        setFallback(customFallback);
    }
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleFallback}
        />
    );
}

export default forwardRef(Image);
