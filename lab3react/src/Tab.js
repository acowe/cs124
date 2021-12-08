import './Tab.css';

function Tab(props) {
    const classNames = ["tab-list-item"];
    if (props.activeTab === props.label) {
        classNames.push("tab-list-active");
    }
    return <li className={classNames.join(" ")}
               onClick={() => props.onClickTab(props.label)}
               aria-label={props.label + " tab"}>
        {props.label}
    </li>
}

export default Tab;