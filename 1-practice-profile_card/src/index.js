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

}

function Intro() {

}

function SkillList() {
}

function Skill() {
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
