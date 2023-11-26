import {app} from "./settings"

const port = 80;

app.listen(port, () => {
    console.log('Listen on port ${port}')
})

