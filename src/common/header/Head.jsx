import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 021 - 9876543</label>
            <i className='fa fa-envelope'></i>
            <label> gedeBOOK@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ</label>
            <label>Butuh Bantuan?</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
