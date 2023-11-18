import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

// Данное задание пока выполнять в одном файле index.js (текущем)
function App() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro/>
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
            <Skill name="HTML + CSS" color="red" emoji="💪"/>
            <Skill name="JavaScript" color="yellow" emoji="😎"/>
            <Skill name="React" color="Green" emoji="🧠"/>
            <Skill name="Git + GitHub" color='#4324' emoji="👍"/>
            <Skill name="Java" color='#FD5' emoji="💪"/>
            <Skill name="Python" color='#FD5' emoji="👨‍🎓"/>
            <Skill name="React Native" color='#BAD7A4' emoji="😇"/>
        </ul>
    )
}

function Skill({name, color, emoji}) {
    return (
        <li style={{backgroundColor: color}} className="skill">
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
