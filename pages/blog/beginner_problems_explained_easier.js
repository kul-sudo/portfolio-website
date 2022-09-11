import Head from 'next/head'
import Image from 'next/image'
import useTheme from '../../lib/theme'
import Keyboard from '../../public/keyboard.jpg'
import TealDivider from '../../components/divider'
import Link from 'next/link'
import { obsidian } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { useEffect } from 'react'

const Blog = () => {
  const for_loop_list = `# let's create a list
  the_list = ['potato', 'apple', 'orange']`
  const for_loop_example = `for element in the_list:
  print(element.upper())`
  const for_loop_output = `potato => POTATO => print POTATO
  apple => APPLE => print APPLE
  orange => ORANGE => print ORANGE`
  const for_loop_push = `empty_list = []
  for element in ['element one', 'element two']:
    empty_list.append(element)`
  const for_loop_last_example = `empty_list = []
  not_empty_list = ['love', 'banana']
  for element in not_empty_list:
    empty_list.append(element)`
  const for_loop_last_example_lists = `print(empty_list) # ['love', 'banana']
  print(not_empty_list) # ['love', 'banana']`
  
  const toggleDarkMode = useTheme((state) => state.toggleMode)
  const dark = useTheme((state) => state.dark)

  useEffect(() => {
    if (dark) {
      document.querySelector('html').classList.add('bright')
      document.getElementById('navbar').style.color = 'black'
      document.getElementById('sun').style.display = 'none'
      document.getElementById('moon').style.display = 'block'
      document.getElementById('for-loops').style.color = 'black'
      document.getElementById('date-published').style.color = 'black'
    } else {
      document.querySelector('html').classList.remove('bright')
      document.getElementById('navbar').style.color = 'white'
      document.getElementById('sun').style.display = 'block'
      document.getElementById('moon').style.display = 'none'
      document.getElementById('for-loops').style.color = 'white'
      document.getElementById('date-published').style.color = 'white'
    }
  }, [dark])
  return (
    <>
      <Head>
        <title>Cyril&apos;s portfolio</title>
        <meta name="description" content="All of the problems of beginners explained easier"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="flex justify-center align-middle fixed bottom-10 right-10 z-[1] 830px:block font-[600]" id="navbar">
        <div className="space-x-2">
          <Link href="/"><span className="font-quicksand cursor-pointer">Home</span></Link>
          <Link href="../../blog"><span className="font-quicksand cursor-pointer">Blog</span></Link>
          <a className="font-quicksand" href="https://github.com/kul-sudo" id="github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="flex justify-center before-830px:ml-3 mt-[0.05rem]">
          <div className="hidden" id="sun">
            <IconButton onClick={toggleDarkMode} icon={<SunIcon/>} style={{width: '20px', height: '20px', color: 'white'}}/>
          </div>

          <div className="hidden" id="moon">
            <IconButton onClick={toggleDarkMode} icon={<MoonIcon/>} style={{width: '20px', height: '20px', color: 'black'}}/>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-5 text-4xl font-quicksand text-white font-[600]">
        <div className="block">
          <div className="select-none w-[30rem] h-auto">
            <Image src={Keyboard} quality={100} draggable={false} className="rounded-xl"/>
          </div>
          <div className="flex justify-center pt-10">
            <TealDivider/>
          </div>
          <div className="flex justify-center pt-10">
            <span id="date-published">9/10/2022</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col text-center font-quicksand text-white w-[56.5rem]" id="for-loops">
          <span className="pt-10 text-4xl font-[300]">When I was a beginner, I couldn't understand things that now seem tremendously simple and obvious to me. I truly want to explain a few things without any complex explanations that are sometimes used.Let's begin.</span>
          <span className="pt-10 text-4xl font-[600] underline">"for" loops</span><br/>
          <span className="pt-2 text-4xl font-[300]">For some reason, I had certain problems with "for" loops. I surmise some of you can't picture the way "for" loops work, so let's figure out the way "for" loops work with a few examples.</span>
          <div className="pt-5">
            <SyntaxHighlighter language="python" style={obsidian} customStyle={{borderRadius: '1rem'}}>
              {for_loop_list}
            </SyntaxHighlighter>
          </div>
          <span className="pt-5 text-4xl font-[300]">A "for" loop merely goes through something iterable.</span>
          <div className="pt-5">
            <SyntaxHighlighter language="python" style={obsidian} customStyle={{borderRadius: '1rem'}}>
              {for_loop_example}
            </SyntaxHighlighter>
          </div>
          <span className="pt-5 text-4xl font-[300]">What happens is that the "for" loops goes through the list assigning elements to the 'element' variable, uppercases the 'element' variable which contains the current string and prints this uppercased version afterwards.</span>
          <div className="pt-5">
            <SyntaxHighlighter language="python" style={obsidian} customStyle={{borderRadius: '1rem'}}>
              {for_loop_output}
            </SyntaxHighlighter>
          </div>
          <span className="pt-5 text-4xl font-[300]">In this case, it is done synchronously (one by one). "for" loops can be applied to anything that you can go <span className="underline">through</span>.<br/>If you go through a string, then you will get all of the letters of this string one by one.<br/><br/>Let's see another example.</span>
          <div className="pt-5">
            <SyntaxHighlighter language="python" style={obsidian} customStyle={{borderRadius: '1rem'}}>
              {for_loop_push}
            </SyntaxHighlighter>
          </div>
          <span className="pt-5 text-4xl font-[300]">Everything that happens is that each element of the list we go through is appended to 'empty_list'<br/>'empty_list' will look like that after the "for" loop finishes its job.</span>
          <div className="pt-5">
            <SyntaxHighlighter language="python" style={obsidian} customStyle={{borderRadius: '1rem'}}>
              ['element one', 'element two']
            </SyntaxHighlighter>
          </div>
          <span className="pt-5 text-4xl font-[300]">Let's see the last example.</span>
          <div className="pt-5">
            <SyntaxHighlighter language="python" style={obsidian} customStyle={{borderRadius: '1rem'}}>
              {for_loop_last_example}
            </SyntaxHighlighter>
          </div>
          <span className="pt-5 text-4xl font-[300]">The iteration does not remove the elements from 'not_empty_list' appending them to 'empty_list'. Both of these lists will look like that after the "for" loop finishes its job.</span>
          <div className="pt-5">
            <SyntaxHighlighter language="python" style={obsidian} customStyle={{borderRadius: '1rem'}}>
              {for_loop_last_example_lists}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog