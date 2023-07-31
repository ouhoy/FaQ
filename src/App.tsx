import {faqs} from "./homePageData.ts";
import "./App.css"

function App() {


    return (
        <>
            <Faq faqs={faqs}/>
        </>
    )
}


function Faq({faqs}: { faqs: { question: string, answer: string }[] }) {
    return <section>
        <div className={"faqs-container section"}>
            <h2>Frequently Asked Questions</h2>
            <p>
                If you have anything else you want to ask, <a href="#">reach out to us.</a>
            </p>
            <div className={"faqs"}>
                {faqs.map((qa) => <FaqItem question={qa.question} answer={qa.answer}/>)}
            </div>
        </div>

    </section>
}

function FaqItem({question, answer}: { question: string, answer: string }) {
    return (<div className="question-border-wrap">
        <div className="question-container">
            <div className="question">
                <p>{question}</p>
                <div className="plus">
                    <div className="line"></div>
                    <div
                        className="line plus-line"
                        style={{"transform": "rotate(180deg)"}}
                    ></div>
                </div>
            </div>

            <p className="faqs-text">
                {answer}
            </p>
        </div>
    </div>)
}

export default App
