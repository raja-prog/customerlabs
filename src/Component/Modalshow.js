import React, { useState,useEffect } from 'react'
import { Modal,Button,Dropdown } from 'react-bootstrap';
const axios = require('axios');
const Modalshow = () => {
  const [dropValue,setDropvalue]=useState('')
  const [flags,setFlags]=useState({

    first_name:1,
    last_name:1,
    gender:1,
    age:1,
    account_name:1,
    city:1,
    state:1

  })
  // const [allValues, setAllValues] = useState([{

  //   // first_name:'first_name',
  //   // last_name:'last_name',
  //   // gender:'gender',
  //   // age:'age',
  //   // account_name:'account_name',
  //   // city:'city',
  //   // state:'state'
  //   first_name:'',
  //   last_name:'',
  //   gender:'',
  //   age:'',
  //   account_name:'',
  //   city:'',
  //   state:''

  // }]);
  const [box,setBox]=useState('')
  const [count,setCount]=useState(0)
  // const [arr,setArr]=useState([])
  const [fields, setFields] = useState([{ value: '' }]);
   const [segment,setSegment]=useState('')

  useEffect(() => {
   console.log(fields)
  }, [fields])


  const setSegmentname=(e)=>{
    setSegment(e.target.value)
  }

  function handleChange(i, e) {
    const values = [...fields];
    // if(e.target.value==='first_name'){
    //   setFlags({...flags,first_name:0})
    // }
    // else if(e.target.value==='last_name'){
    //   setFlags({...flags,last_name:0})
    // }else if(e.target.value==='gender'){
    //   setFlags({...flags,gender:0})
    // }else if(e.target.value==='age'){
    //   setFlags({...flags,age:0})
    // }else if(e.target.value==='account_name'){
    //   setFlags({...flags,account_name:0})
    // }else if(e.target.value==='city'){
    //   setFlags({...flags,city:0})
    // }else if(e.target.value==='state'){
    //   setFlags({...flags,state:0})
    // }
    values[i].value = e.target.value;
    console.log(values[i].value,'sdfsdf')
    setFields(values);
  }

  const handleAdd=()=> {
     console.log(dropValue,'sdfds')
    if(fields[0].value==''){
      const values=[]
      values.push({ value: dropValue });
      // console.log(values,'sdfds')
    setFields(values);
    }
    else{
      const values = [...fields];
    values.push({ value: dropValue });
    setFields(values);
    }
    if(dropValue==='first_name'){
      setFlags({...flags,first_name:0})
    }
    else if(dropValue==='last_name'){
      setFlags({...flags,last_name:0})
    }
    else if(dropValue==='gender'){
      setFlags({...flags,gender:0})
    }
    else if(dropValue==='age'){
      setFlags({...flags,age:0})
    }
    else if(dropValue==='account_name'){
      setFlags({...flags,account_name:0})
    }
    else if(dropValue==='city'){
      setFlags({...flags,city:0})
    }
    else if(dropValue==='state'){
      setFlags({...flags,state:0})
    }
    // const values = [...fields];
    // values.push({ value: dropValue });
    // setFields(values);
    // if(dropValue==='first_name'){
    //   values.push({
    //     // first_name:'',
    //     last_name:'',
    //     gender:'',
    //     age:'',
    //     account_name:'',
    //     city:'',
    //     state:''
    //     });
    //   setFields(values);
    //   setFlags({...flags,first_name:0})
    // }
    // else if(dropValue==='last_name'){
    //   values.push({
    //     first_name:'',
    //     // last_name:'',
    //     gender:'',
    //     age:'',
    //     account_name:'',
    //     city:'',
    //     state:''
    //     });
    //   setFields(values);
    //   setFlags({...flags,last_name:0})
    // }else if(dropValue==='gender'){
    //   values.push({
    //     first_name:'',
    //     last_name:'',
    //     // gender:'',
    //     age:'',
    //     account_name:'',
    //     city:'',
    //     state:''
    //     });
    //   setFields(values);
    //   setFlags({...flags,gender:0})
    // }else if(dropValue==='age'){
    //   values.push({
    //     first_name:'',
    //     last_name:'',
    //     gender:'',
    //     // age:'',
    //     account_name:'',
    //     city:'',
    //     state:''
    //     });
    //   setFields(values);
    //   setFlags({...flags,age:0})
    // }else if(dropValue==='account_name'){
    //   values.push({
    //     first_name:'',
    //     last_name:'',
    //     gender:'',
    //     age:'',
    //     // account_name:'',
    //     city:'',
    //     state:''
    //     });
    //   setFields(values);
    //   setFlags({...flags,account_name:0})
    // }else if(dropValue==='city'){
    //   values.push({
    //     first_name:'',
    //     last_name:'',
    //     gender:'',
    //     age:'',
    //     account_name:'',
    //     // city:'',
    //     state:''
    //     });
    //   setFields(values);
    //   setFlags({...flags,city:0})
    // }else if(dropValue==='state'){
    //   values.push({
    //     first_name:'',
    //     last_name:'',
    //     gender:'',
    //     age:'',
    //     account_name:'',
    //     city:'',
    //     // state:''
    //     });
    //   setFields(values);
    //   setFlags({...flags,state:0})
    // }


  }
  const Pass=()=>{

    // axios({
    //   method: 'post',
    //   url: 'https://webhook.site/',
    //   data: {
    //     segment: segment,
    //     details: fields
    //   }
    // })
    // axios.get('',{
    //   params: {
      console.log(segment,'sdf');
    //   }
    // })
//     const params = JSON.stringify({

// "email": email,

// "password": password,

// });
const params={
  segment: segment,
        details: fields
}
// new URLSearchParams()
// params.append('segment_name',segment)
//params.append('details',fields)
    axios.post('https://webhook.site/35794193-d860-41dd-9a81-3151306bfe4e', {
      // headers: {"Access-Control-Allow-Origin": "*"},
      // params: {
        // segment: segment,
        // details: fields
      // }
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : params
    })
  .then(function (response) {

    console.log(response);
  })
  .catch(function (error) {

    console.log(error);
  })
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const setterval=(e)=>{
    const {name,value}=e.target
    console.log(name,'name')
    setDropvalue(e.target.value)

  }
  const setValue=(e)=>{

    console.log(e.target.value,'sdf')
    const values={...flags}
   var vals= e.target.value
    // values.entries((i,v)=>{
    //   console.log(i,v)
    // })
  if(e.target.value==='first_name'){
    setFlags({...flags,first_name:0})
  }
  // else if(e.target.value==='last_name'){
  //   setFlags({...flags,last_name:0})
  // }else if(e.target.value==='gender'){
  //   setFlags({...flags,gender:0})
  // }else if(e.target.value==='age'){
  //   setFlags({...flags,age:0})
  // }else if(e.target.value==='account_name'){
  //   setFlags({...flags,account_name:0})
  // }else if(e.target.value==='city'){
  //   setFlags({...flags,city:0})
  // }else if(e.target.value==='state'){
  //   setFlags({...flags,state:0})
  // }
  // console.log(sol)
    // for(var k in values){
    //
    // }

    console.log(dropValue,'tyty')

  }

  const addDropdown=()=>{
    setCount(count+1)
    setBox('show')
  }

    return (
      <Modal.Dialog size='xl'>
      <Modal.Header>
        <Modal.Title>Saving Segement</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input
        
        style={
          {
           marginBottom:'10px'
          }
        }
         value={segment} onChange={setSegmentname} type='text' placeholder='Segment name'>
        </input>
        {/* {
          box ?
        } */}
        {/* {fields[0].value!=='' ?  */}
          <div
           style={
    {
     border: '2px solid blue',
     padding: '20px'
    }
  }
  > {fields.map((field, idx) => {
    console.log(fields[0].value,'opop')
    if(fields[idx].value!==''){
        return (
          <div  style={
            {
            //  border: '2px solid blue',
             marginTop:'20px'
            }}
           key={`${field}-${idx}`}
          // style={
          //   {
          //    border: '2px solid red'
          //   }
          // }
          >
            <select
             value={fields[idx].value}
             onChange={e => handleChange(idx, e)}
             >
  {/* <option value="Orange">Orange</option>
  <option value="Radish">Radish</option>
  <option value="Cherry">Cherry</option> */}
  {/* {
    flags.first_name==1 ? <option value="first_name">first_name</option>:''
  }
   {
    flags.last_name==1 ? <option value="last_name">last_name</option>:''
  }
   {
    flags.gender==1 ? <option value="gender">gender</option>:''
  }
   {
    flags.age==1 ? <option value="age">age</option>:''
  }
   {
    flags.account_name==1 ? <option value="account_name">account_name</option>:''
  }
   {
    flags.city==1 ? <option value="city">city</option>:''
  }
   {
    flags.state==1 ? <option value="state">state</option>:''
  } */}

    <option value="first_name">first_name </option>
    <option value="last_name">last_name </option>
    <option value="gender">gender</option>
    <option value="age">age</option>
    <option value="account_name">account_name</option>
    <option value="city">city</option>
    <option value="state">state</option>
</select>
            {/* <input
              type="text"
              placeholder="Enter text"
              onChange={e => handleChange(idx, e)}
            /> */}
            {/* <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button> */}
          </div>
        );}
      })}</div>
      {/* :'' } */}

        <br/>
        <select
         value={dropValue}
         onChange={setterval}>
  {/* <option value="Orange">Orange</option>
  <option value="Radish">Radish</option>
  <option value="Cherry">Cherry</option> */}
  <option value="Add schema to segment" hidden>Add schema to segment</option>
  {
    flags.first_name==1 ? <option value="first_name">first_name</option>:''
  }
   {
    flags.last_name==1 ? <option value="last_name">last_name</option>:''
  }
   {
    flags.gender==1 ? <option value="gender">gender</option>:''
  }
   {
    flags.age==1 ? <option value="age">age</option>:''
  }
   {
    flags.account_name==1 ? <option value="account_name">account_name</option>:''
  }
   {
    flags.city==1 ? <option value="city">city</option>:''
  }
   {
    flags.state==1 ? <option value="state">state</option>:''
  }
  {/* <option value="first_name">first_name</option>
    <option value="last_name">last_name </option>
    <option value="gender">gender</option>
    <option value="age">age</option>
    <option value="account_name">account_name</option>
    <option value="city">city</option>
    <option value="state">state</option> */}
</select>
<br/>
<button style={
    {
    //  border: '2px solid blue',
     marginTop:'60px',
     border: '1px solid #3498db',
      backgroundColor : 'transparent',
      boxShadow: '0 6px 6px rgba(0, 0, 0, 0.6)'
    }}
 type="button" onClick={() => handleAdd()}>
        + Add new schema
      </button>

        {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Add schema to segment
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.ItemText>Add schema to segment</Dropdown.ItemText>
    <Dropdown.Item href="first_name">first_name</Dropdown.Item>
    <Dropdown.Item href="last_name">last_name </Dropdown.Item>
    <Dropdown.Item href="gender">gender</Dropdown.Item>
    <Dropdown.Item href="age">age</Dropdown.Item>
    <Dropdown.Item href="account_name">account_name</Dropdown.Item>
    <Dropdown.Item href="city">city</Dropdown.Item>
    <Dropdown.Item href="state">state</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
 <Button
    onClick={Pass}
    style={{Background:'blue',
    marginTop:'240px'}}>
      save the segment
    </Button>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer> */}
    </Modal.Dialog>
    )
}

export default Modalshow
