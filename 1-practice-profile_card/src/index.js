import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Данное задание пока выполнять в одном файле index.js (текущем)
function App() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">

                <Intro/>
                {/* Должен содержать один Skill компонент для каждого web dev навыка
                 что у тебя есть, каждый компонент должен кастомизироваться пропсами (props)
                 */}
                <SkillList/>
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img className="avatar" src="avatar.jpg" alt="avatar"/>
    );
}

function Intro() {
    return (
        <div>
            <h1>John Doe</h1>
            <p className="intro-description">
                Hi my name is John Doe and I am a full stack developer.
                I am currently learning React and have a fun.
                When I am not coding I like to drive my track and grow my mustache
            </p>
        </div>
    );
}

function SkillList() {
    return (
        <ul className="skill-list">
            <Skill name="HTML + CSS" style={{backgroundColor: 'red'}} emoji="💪"/>
            <Skill name="JavaScript" style={{backgroundColor: 'yellow'}} emoji="😎"/>
            <Skill name="React" style={{backgroundColor: 'Green'}} emoji="🧠"/>
            <Skill name="Git + GitHub" style={{backgroundColor: '#4324'}} emoji="👍"/>
            <Skill name="Java" style={{backgroundColor: '#FD5'}} emoji="💪"/>
            <Skill name="Python" style={{backgroundColor: '#FD5'}} emoji="👨‍🎓"/>
            <Skill name="React Native" style={{backgroundColor: '#BAD7A4'}} emoji="😇"/>
        </ul>
    )
}

function Skill({name, style, emoji}) {
    return (
        <li style={style} className="skill">
            <span>{name}</span>
            <span>{emoji}</span>
        </li>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
