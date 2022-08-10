import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="overlay" style={{opacity: '0.8'}}>
        <div className="page-loader">
            <img loading="lazy" src="https://elxer.com/assets/images/svg/loader.svg" alt="page-loader"/>
        </div>
      </div>
    </>
  )
}

export default Loader