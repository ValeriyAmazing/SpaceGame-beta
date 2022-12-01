function setGlobal(...Objs) {
    for (const obj of Objs) {
        for (const [key, value] of Object.entries(obj)) {
            globalThis[key]=value
        }
            
    }
}

export {setGlobal}