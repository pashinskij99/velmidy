import { ReactComponent as Rectangle1 } from '../../assets/icons/svg/Rectangle1.svg';
import { ReactComponent as Rectangle2 } from '../../assets/icons/svg/Rectangle2.svg';
import React from 'react';
import { ReactComponent as Rectangle3 } from '../../assets/icons/svg/Rectangle3.svg';
import { ReactComponent as Rectangle4 } from '../../assets/icons/svg/Rectangle4.svg';
import { ReactComponent as Rectangle5 } from '../../assets/icons/svg/Rectangle5.svg';

export const SidebarContent4: React.FC = () => {
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
            <li>
                <Rectangle3 />
                <span>Разрастание фиброзной ткани</span>
            </li>
            <li>
                <Rectangle4 />
                <span>Разрастание фиброзной ткани</span>
            </li>
            <li>
                <Rectangle5 />
                <span>
                    Фиолетовый - нарушение архитектоники печени (ложные дольки)
                </span>
            </li>
        </div>
    );
};
