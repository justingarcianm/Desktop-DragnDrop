
// icons 
import chrome from './assets/chrome_icon.png'
import folder from './assets/folder.png'
import pdf from './assets/PDF_icon.png'
import gmail from './assets/gmail_icon.png'
// components
import { FormSpree } from './components/Form/FormSpree'
import Resume from '../src/components/Resume/Resume'
import MyPicture from '../src/components/MyPicture/MyPicture'
import About from '../src/components/About/About'
import Projects from '../src/components/Projects/Projects'

const data = [
    {
        name:'about.html',
        img: chrome,
        Content:About
    },
    {
        name:'resume.pdf',
        img: pdf,
        Content:Resume
    },
    {
        name:'projects',
        img: folder,
        Content:Projects
    },
    {
        name:'me.png',
        img: folder,
        Content:MyPicture
    },
    {
        name:'unfinished',
        img: folder,
        Content:'unfinished folder'
    },
    {
        name:'email me',
        img: gmail,
        Content:FormSpree
    }
]

export default data