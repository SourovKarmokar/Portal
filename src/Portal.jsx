import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const Portal = ({children}) => {
    const mountElement = document.getElementById('portal-root')
    const [elementDiv] = useState(() => document.createElement('div'))

    useEffect(() => {
        mountElement.appendChild(elementDiv)
    } , [elementDiv, mountElement]);

    return createPortal(children, elementDiv)
}

export default Portal ;