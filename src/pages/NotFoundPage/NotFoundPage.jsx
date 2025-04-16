import React from 'react'
import './NotFoundPage.style.css'

const NotFoundPage = () => {
  return (
    <div className='warning-page'>
        <div className='message'>
            <p>404 Page not found☹️</p>
            We couldn't find the page <span class="mobile-break">you were looking for.</span>
        </div> 
    </div>
  )
}

export default NotFoundPage