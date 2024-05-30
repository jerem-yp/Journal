import logo from "../assets/journal.jpg"
function Home() {
    return (
        <>
            <div className={"background"}>
            <div className={"div-row home-center"}>
                <div className={"div-row set-margin-bottom-far"}>
                    <img src={logo} className={"rounded-edges"} alt={"Journal logo"} width={350} height={350}/>
                </div>
                <div className={"div-row set-margin-bottom-far small-width"}>
                    <p className={"h2"}><b>Logging your thoughts and track your progress.</b></p>
                </div>
                <div className={"div-row set-margin-bottom-far small-width"}>
                    <p className={"h2"}><em>A simple, easy-to-use journal to jot down your thoughts. Whether it's a
                        review, an idea, or anything else - here's a spot to write it all down!</em></p>
                </div>
                <div className={"div-row set-margin-bottom-far small-width"}>
                    <p className={"h2"}>Get Started</p>
                </div>


                <div className={"div-row split-between set-margin-bottom-far"}>
                    <div className={"element"}>
                        <button>Get the Repository</button>
                    </div>
                    <div className={"element"}>
                        <button>Read the Docs</button>
                    </div>
                </div>

                <hr className={"large-width"}/>

                <div className={"div-row split-between set-margin-bottom-far"}>
                    <div className={"element"}>
                        <p className={"element"}>Currently <b>v1.0.0</b></p>
                    </div>
                    <div className={"element"}>
                        <a href={"/"}>Download</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home;