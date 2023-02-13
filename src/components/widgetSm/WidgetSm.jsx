import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
    return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://url.kr/rk63ld"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Sangyoon Hong</span>
                        <span className="widgetSmUserTitle">Director of D.I Team</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://url.kr/48n26w"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Hyunsuk Jeong</span>
                        <span className="widgetSmUserTitle">Project Manager</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://url.kr/gj49ys"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Kisung Kim</span>
                        <span className="widgetSmUserTitle">Data Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://url.kr/of5wnt"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Rayoung Kwon</span>
                        <span className="widgetSmUserTitle">Data Analyst</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://url.kr/ygp73k"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jihyun Kim</span>
                        <span className="widgetSmUserTitle">Front-end Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}