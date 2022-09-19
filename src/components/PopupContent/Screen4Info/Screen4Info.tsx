import { Info } from '../../Popup/Popup.styles';

export const Screen4Info: React.FC = () => {
    return (
        <Info>
            <h2>Источники</h2>
            <ol className="list">
                <li>Yim & Lok. Hepatology. 2006;43:S173-81.</li>
                <li>Iloeje. Liver Int. 2012;32:1333.</li>
                <li>Fattovich. Hepatology. 1995;21:77</li>
            </ol>
            <span className="blue-text"></span>
        </Info>
    );
};
