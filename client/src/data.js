
// icons 
import chrome from './assets/chrome_icon.png'
import folder from './assets/folder.png'
import pdf from './assets/PDF_icon.png'
import gmail from './assets/gmail_icon.png'
import avatar from './assets/image_icon.jpg'
// components
import { FormSpree } from './components/Form/FormSpree'
import Resume from '../src/components/Resume/Resume'
import MyPicture from '../src/components/MyPicture/MyPicture'
import About from '../src/components/About/About'
import ProjectOne from '../src/components/Projects/Project_1'
import ProjectTwo from '../src/components/Projects/Project_2'
import ProjectThree from '../src/components/Projects/Project_3'

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
        name:'project_one',
        img: folder,
        Content:ProjectOne
    },
    {
        name:'project_two',
        img: folder,
        Content:ProjectTwo
    },
    {
        name:'project_three',
        img: folder,
        Content:ProjectThree
    },
    {
        name:'me.png',
        img: avatar,
        Content:MyPicture
    },
    {
        name:'email me',
        img: gmail,
        Content:FormSpree
    }
]

export default data