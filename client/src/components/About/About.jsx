import { CopyBlock } from 'react-code-blocks'

const About = () => {

    const html = `
    <!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>About Justin</title>
    </head>
    <body>
   <main class='about'>
   <h2 class='about-title'>ABOUT JUSTIN</h2>
        <p>I started practicing Web Development in 2018 and I haven't stopped since. I appreciate how much I've been rewarded for my stubbornness. From tackling the basics to deploying fullstack apps, learned to appreciate my tenacity and love for problem solving. I started off a lone wolf but quickly grew to love team work and mentoring when I joined a bootcamp in 2019. I live by the adage,</p>

        <blockquote>
        “Luck is what happens when preparation meets opportunity.” -Seneca
        </blockquote>

        <p>I am a textbook nerd who plays video games and reads comics in my spare time when I need a break from coding. I'm currently living in Albuquerque, NM where the tech field is still young but filled with opportunity. I am very lucky to be in the position I am to have gone from coding in my spare time to it being my career. Thanks for reading! If you think I would be a good fit for your team, or just want to get to know me, send me a message.</p>
   </main>

    </body>
</html>
    `;

    const forceEditSpan = () => {
        const spanTag = document.querySelector('#About > div > span')
        return spanTag.style.whiteSpace = "pre-line"
    }
    setTimeout( forceEditSpan, 100 )
    return (
        <div id="About">
             <CopyBlock
          language="html"
          text={html}
          theme='github'
          showLineNumbers={true}
          wrapLines={true}
          codeBlock
        />

        </div>
    )
}

export default About