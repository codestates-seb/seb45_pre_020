
// export default function Ask() {

//     useEffect(() => {
//         dispatchEvent(resetInput());
//     }, [])

//     const titleChange = (e) => dispatchEvent(typeTitle(e.target.value));

//     const contentChange = (value) => dispatch(typeDetails(value));

//     const AskSubmit = () => {

//         const requestData = {
//             title: title,
//             content: content,

//         }

//     return (
//         <div className="AskContainer">
//             <h1>Ask a public quesion</h1>
//             <AskTitle className={AskTitle} value={title} onChange={titleChange} />
//             <AskInput className={AskInput} value={content} onChange={contentChange} />
//             <AskBtn className={AskBtn} onClick={AskSubmit} />
//         </div>
//     )
// }