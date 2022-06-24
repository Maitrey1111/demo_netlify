import { useState } from "react";
import "./page1.css"

const Page1 = () => {

    const [Var, setVar] = useState(second)

    return(
        <div id="page-1">
            Here is the page 1
            This is the first page to be opened
            <a href="/page2" onClick={setVar(1)}>page-2</a>
        </div>
    );

}

export default Page1;