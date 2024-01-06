import React from 'react'

const Members = (props) => { 
  let imgstyle = {width: 90, height: 90} 
  let list = props.members.map((member) => {
    return (
      <div className='col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3' key={member.name}>
        <img src={member.photo} className='img-thumbnail' style={imgstyle}/>
        <br/>
        <h6>{member.name}</h6>
        <br/>
      </div>
    )
  })
  return (
    <div>
      <h2 className='m-4'>Members</h2>
      <div className='container'>
        <div className='row'>{list}</div>
      </div>
    </div>
  )
}

export default Members