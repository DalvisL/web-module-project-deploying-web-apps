import {useState} from 'react';
import  styled from 'styled-components'
import Form from './Components/Form';

const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
 
  .member {
    border: solid grey 3px;
    border-radius: 10px;
    width: 40vw;
    background: white;
    h3 {
      font-size: 3rem;
    }
    h4 {
      font-size: 2.5rem;
    }
  }

.member-info {
  margin: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    color: grey;
    a {
      color: grey;
    }
  }
}
`
const teamMemberList = [
  {
    'name' : 'Dalvis L.',
    'email' : 'Dalvis.liz27@gmail.com',
    'role' : 'Full-Stack Web Dev'
  },
  {
    'name' : 'George C.',
    'email' : 'Georgecampbell12@hotmail.com',
    'role' : 'Senior Software Engineer'
  },
  {
    'name' : 'Emily R.',
    'email' : 'emily.rod@gmail.com',
    'role' : 'UI Web Designer'
  },
  {
    'name' : 'Jackie S.',
    'email' : 'jackieS@employerdomain.com',
    'role' : 'Director of Sales'
  }
]

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  })
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <h1>Members</h1>
      {modalOpen && <Form 
        formData={formData}
        setFormData={setFormData}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        setModalOpen={setModalOpen}
      />}
      <MembersList>
        {teamMembers.map( (member, index) => {
          return(
            <div className='member' key={index}>
              <div className='member-info'>
                <div className='member-name'>
                  <h3>{member.name}</h3>
                  <hr></hr>
                </div>
                <div className='adt-info'>
                  <h4>Email: <span><a href={`mailto:${member.email}`}>{member.email}</a></span></h4>
                  <h4>Role: <span>{member.role}</span></h4>
                </div>  
              </div>
            </div>
          )
        })}
       <button onClick={() => {setModalOpen(true)}}>Add a New Member <span className='plus'>+</span> </button> 
      </MembersList>
    </div>
  );
}

export default App;

