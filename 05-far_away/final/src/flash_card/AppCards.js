import "./styles.css";
import {useState} from "react";

export default function AppCards() {
    return (
        <div className="App">
            <FlashCards/>
        </div>
    );
}

const questions = [
    {
        id: 3457,
        question: "На каком языке основан React?",
        answer: "JavaScript"
    },
    {
        id: 7336,
        question: "Каковы строительные блоки приложений React?",
        answer: "Компоненты"
    },
    {
        id: 8832,
        question: "Как называется синтаксис, который мы используем для описания пользовательского интерфейса в React?",
        answer: "JSX"
    },
    {
        id: 1297,
        question: "Как передать данные от родительского компонента к дочернему?",
        answer: "Props"
    },
    {
        id: 9103,
        question: "Как дать компонентам память?",
        answer: "useState hook"
    },
    {
        id: 2002,
        question:
            "Как мы называем элемент ввода, который полностью синхронизирован с состоянием?",
        answer: "Управляемый элемент"
    }
];

function FlashCards() {
    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null);
    }

    return (
        <div className="flashcards">
            {questions.map((question) => (
                <div
                    key={question.id}
                    onClick={() => handleClick(question.id)}
                    className={question.id === selectedId ? "selected" : ""}
                >
                    <p>
                        {question.id === selectedId ? question.answer : question.question}
                    </p>
                </div>
            ))}
        </div>
    );
}
