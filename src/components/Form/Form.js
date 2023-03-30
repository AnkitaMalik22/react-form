import React,{useState,useEffect} from 'react';
import Alert from '../Alert/Alert'
import './Form.css'

const Form = () => {
  const [active, setActive] = useState(false);
  const [text ,setText]=useState('')

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    skill: '',
  })
const initialItems =[
  {id: 1, name: 'HTML', selected: false},
  {id: 2, name: 'CSS', selected: false},
  {id: 3, name: 'JS', selected: false},
  {id: 4, name: 'React', selected: false},
  {id: 5, name: 'Node', selected: false},
]

const [selectedItems, setSelectedItems] = useState(initialItems)
const selectedOptions = selectedItems.filter(item => item.selected)

useEffect(() => {
  if(inputValue.name.trim() && inputValue.email.trim() && inputValue.password.trim()  && selectedOptions.length >0 ) {
    
    setActive(true)
  } else {
    setActive(false)
  }

}, [inputValue,selectedOptions])



useEffect(() => {
console.log(active);

}, [active])

const handleInput = (e) => {
  const value = e.target.value;
  setInputValue({
    ...inputValue,
    [e.target.name]: value,
  })

}
const handleSelect = (event) => {
  const selectedItem = selectedItems.find(item => item.name === event.target.value)
  const updatedItems = selectedItems.map(item => {
    if (item.id === selectedItem.id) {
      return {...item, selected: !item.selected}
    }
    return item;
  })
  setSelectedItems(updatedItems)
}
const handleDiSelect =(el) => {
  const selectedItem = selectedItems.find(item => item.name === el.name)
  const updatedItems = selectedItems.map(item => {
    if (item.id === selectedItem.id) {
      return {...item, selected: !item.selected}
    }
    return item;
  })
  setSelectedItems(updatedItems)
}


const handleSubmit = (e) => {
  e.preventDefault();
 setText(`You have successfully subscribed to our plan `);
  setInputValue({
    name: '',
    email: '',
    password: '',
    skill: '',
  })
  setSelectedItems(initialItems);
  setActive(false);


}



  return (
    <div className='form-container'>
      <Alert text={text} />
   <form className='form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' className='input' value={inputValue.name} onChange={handleInput} name='name'
         />
      <input type='email' placeholder='Email Address' className='input' value={inputValue.email} onChange={handleInput} name='email'/>

      <input type='password' placeholder='Password' className='input' value={inputValue.password} onChange={handleInput} name='password'
      
      />
    
   
    <select name='skill' id='skill' placeholder='Choose your skills' className='select-input'  value={inputValue.skill}
  onChange={handleSelect}
     >
      <option value=''>Choose your skills</option>
    {
      selectedItems.map((item) => {
        return <option   key={item.id}
        value={item.name}
        selected={item.selected}
        disabled={item.selected}
        >{item.name}</option>
      })
    }
    </select>
   
    <div className='selected-items'>
      
        {
        selectedOptions.map((item) => {
          return (
            
          <div className='selected-item' key={item.id}>
              <p>{item.name}</p>
              <span className='close' 
              onClick={()=>{handleDiSelect(item)}}
           >x</span>
            </div>
          )
        })
      }
      
      </div>

    <button className={`${active ? "active" : ""} btn`} type='submit' >CLAIM YOUR FREE TRIAL</button>
    <p className='bottom-text'> By clicking the button, you are agreeing to our <a href='#' className='terms'>Terms and Services</a></p>
    </form>
  

    </div>
  )
}

export default Form