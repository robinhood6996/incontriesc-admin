import React from 'react'

const EscortDetailsAboutMe = () => {
  return (
    <div className='row border rounded p-4'>
      {/* About Me / on me start */}
      <div className='col-lg-12 col-12 my-3 w-100'>
        <label htmlFor='message' className='required form-label'>
          About me in Italian Language
        </label>
        <textarea
          rows={5}
          cols={5}
          className='form-control'
          id='message'
          placeholder='Message'
          defaultValue={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse libero aspernatur consectetur ducimus iure quaerat sed perferendis et sunt ratione saepe tenetur inventore praesentium, nihil adipisci quod laudantium. Perferendis illum, distinctio sint mollitia deserunt, esse veniam minus atque beatae voluptate quis, laudantium odio iste odit. Expedita architecto voluptatem, ab aliquam deleniti eius consequuntur modi nesciunt aspernatur eum perspiciatis sit rerum labore qui nulla neque cumque? Dicta eos deleniti sed mollitia asperiores quibusdam ipsa? Possimus omnis blanditiis recusandae quia distinctio?'
          }
        />
      </div>
      <div className='col-lg-12 col-12 my-3 w-100'>
        <label htmlFor='message' className='form-label'>
          About me in English Language
        </label>
        <textarea
          rows={5}
          cols={5}
          className='form-control'
          id='message'
          placeholder='Message'
          defaultValue={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse libero aspernatur consectetur ducimus iure quaerat sed perferendis et sunt ratione saepe tenetur inventore praesentium, nihil adipisci quod laudantium. Perferendis illum, distinctio sint mollitia deserunt, esse veniam minus atque beatae voluptate quis, laudantium odio iste odit. Expedita architecto voluptatem, ab aliquam deleniti eius consequuntur modi nesciunt aspernatur eum perspiciatis sit rerum labore qui nulla neque cumque? Dicta eos deleniti sed mollitia asperiores quibusdam ipsa? Possimus omnis blanditiis recusandae quia distinctio?'
          }
        />
      </div>
      {/* About Me / on me end */}
      <div className='mt-4 d-flex justify-end'>
        <button type='submit' id='kt_sign_up_submit' className='btn btn-lg btn-primary w-25 mb-5'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default EscortDetailsAboutMe
