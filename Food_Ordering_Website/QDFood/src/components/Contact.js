const Contact=()=>{
return (
    <div>
        <h1 className="font-bold text-3xl text-center m-2 p-2">Contact us page</h1>
        <form className="text-center m-4">
            <input placeholder="email"className="border border-black rounded-lg m-2 p-2"></input>
            <input placeholder="message" className="border border-black rounded-lg m-2 p-2"></input>
            <button className="border border-black rounded-lg m-2 p-2">Submit</button>

        </form>
    </div>
)
}
export default Contact;