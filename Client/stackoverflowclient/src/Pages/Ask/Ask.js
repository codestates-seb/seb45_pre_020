import './Ask.css';

export default function Ask() {
  return (
    <>
      <div className="Allcontainer">
        <div className="question">
          <h2 className="question-heading">Ask a public question</h2>
          <h3 className="question-subheading">Title</h3>
        </div>
        <h4 className="AskTitleTip">
          {`Be specific and imagine you're asking a question to another person`}
        </h4>
        <input
          className="AskTitleInput"
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        />
        <button className="AskTitleButton">Next</button>
        <h3 className="AskBody">Body</h3>
        <h4 className="AskBodyTip">{`What are the details of your problem?`}</h4>
        <textarea
          className="AskBodyInput"
          placeholder="Include all the information someone would need to answer your question"
        />
        <button className="AskBodyButton">Post Your Question</button>
      </div>
    </>
  );
}
