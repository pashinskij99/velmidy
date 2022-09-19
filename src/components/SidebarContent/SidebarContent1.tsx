import { ReactComponent as Rectangle1 } from '../../assets/icons/svg/Rectangle1.svg';
import { ReactComponent as Rectangle2 } from '../../assets/icons/svg/Rectangle2.svg';
import React from 'react';

export const SidebarContent1: React.FC = () => {
    return (
        <div>
            <li>
                <Rectangle1 />
                <span>
                    Нормальная ткань - состояние паренхимы печени без
                    патологических изменений
                </span>
            </li>
            <li>
                <Rectangle2 />
                <span>Вне сосудов - септы</span>
            </li>
        </div>
    );
};
