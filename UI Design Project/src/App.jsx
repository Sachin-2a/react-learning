import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


function App() {
      const users=[
        {
          img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
          intro:'',
          tag:'Satisfied'
        
        },
        {
          img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
          intro:'',
          tag:'underserved'
        },
        {
          img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
          intro:'',
          tag:'Underbanked'
        }
      ]
  return (
    <>
    <Section1 users={users}/>
    <Section2 />
    </>
  )
  

}

export default App
