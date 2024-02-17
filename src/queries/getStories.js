// () =>
//     fetch('https://api.github.com/repos/TanStack/query').then((res) =>
//         res.json(),
//     ),
import stories from "../data/climate_stories.json"

const MDOE = process.env.MODE
const BACKEND_URL = process.env.MODE

export const getStories = async () => {
    // check some env var here and then if its nothing then send a sample response
    // if the env var is dev-mono then it will fetch
    // if the env var is production, then it will act same as dev-mono
    if (MODE.length == 0) {
        // return stories
        const url = 'localhost:3000/api/stories'
        const r = await fetch(url)
        const res = r.json()
        return res.docs
    } else if (MODE == 'dev-mono') {
        // assume production
        const url = 'localhost:3000/api/stories'
        const r = await fetch(url)
        const res = r.json()
        return res.docs
    } else if (MODE == 'production') {
        const url = '' // actual production url. use BACKEND_URL
        const r = await fetch(url)
        const res = r.json()
    }

}