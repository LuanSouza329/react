import { useMemo, useState, useCallback } from "react";
import  Btn  from "./Btn";

function Hooks() {

    let field = "name";

    const obj = {
        [field]: "Luan"
    }

    console.log(obj);

    const [count, setCount] = useState<number>(0);

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1);
        }
    ,[])

    return (
        <div>
            <p>{count}</p>
            <Btn text="click" handleClick={handleClick} />
        </div>
    );
}

export default Hooks;
